// geminiService.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config"; // Carrega as variáveis do arquivo .env
import menuRedirectMap from './menuMap.js';

// Pega a chave da API do ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Define a "ferramenta" que o Gemini pode usar. 
// Ele aprenderá a chamar esta função quando identificar que o usuário quer navegar.
const tools = [
  {
    functionDeclarations: [
      {
        name: "navigateToSection",
        description: "Use esta função para navegar o usuário para uma seção específica do aplicativo quando a intenção dele for clara.",
        parameters: {
          type: "OBJECT",
          properties: {
            // O único parâmetro que nossa função precisa é a chave da seção.
            targetSection: {
              type: "STRING",
              description: `A seção de destino para a qual o usuário deve ser redirecionado. Deve ser uma das seguintes chaves: ${Object.keys(menuRedirectMap).join(", ")}`,
            },
          },
          required: ["targetSection"],
        },
      },
    ],
  },
];

/**
 * Executa a conversa com o Gemini.
 * @param {string} userInput - A mensagem atual do usuário.
 * @param {Array} history - O histórico da conversa (opcional).
 * @returns {Promise<object>} - Um objeto com a resposta em texto e/ou dados de redirecionamento.
 */
export async function runConversation(userInput, history = []) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // Um modelo rápido e eficiente
    tools: tools,
    // Instrução principal para o modelo
    systemInstruction: `Você é um assistente virtual amigável e eficiente de um aplicativo de plano odontológico. Seu objetivo é ajudar o usuário a encontrar o que precisa dentro do app. Você é direto e cordial. Nunca invente uma seção que não existe na sua lista de ferramentas. Se não souber o que fazer ou a intenção não for clara, faça uma pergunta para esclarecer.`,
  });

  const chat = model.startChat({
    history: history,
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  const functionCalls = response.functionCalls();

  if (functionCalls && functionCalls.length > 0) {
    // O Gemini decidiu usar nossa ferramenta de navegação!
    const call = functionCalls[0];
    const { targetSection } = call.args;

    // Verificamos se a seção sugerida pelo Gemini existe no nosso mapa
    if (menuRedirectMap[targetSection]) {
      console.log(`[Gemini] Decidiu navegar para: ${targetSection}`);
      const navigationData = menuRedirectMap[targetSection];
      
      // Retornamos os dados para o front-end fazer o redirecionamento
      return {
        textResponse: `Claro! Estou te redirecionando para **${navigationData.redirectTo.replace('/', ' ▸ ')}**.`,
        redirectTo: navigationData.redirectTo,
        message: navigationData.message,
      };
    } else {
      console.warn(`[Gemini] Tentou navegar para uma seção inválida: ${targetSection}`);
      return { textResponse: "Desculpe, não consegui encontrar a seção que você pediu. Pode tentar de outra forma?" };
    }
  } else {
    // O Gemini apenas respondeu com texto
    console.log("[Gemini] Respondeu com texto.");
    return { textResponse: response.text() };
  }
}