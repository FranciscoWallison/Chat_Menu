import menuRedirectMap from "./menuMap.js";

document.addEventListener("DOMContentLoaded", () => {
  // --- Referências aos Elementos do DOM ---
  const chatInitiator = document.getElementById("chat-initiator");
  const chatModal = document.getElementById("chat-modal");
  const closeChatBtn = document.getElementById("close-chat-btn");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const messagesContainer = document.getElementById("chat-messages");

  let conversationHistory = [];

  // --- Funções de Controle do Chat ---
  const openChat = () => chatModal.classList.add("open");
  const closeChat = () => chatModal.classList.remove("open");

  const addMessageToUI = (sender, text) => {
    const bubble = document.createElement("div");
    bubble.classList.add(
      "chat-bubble",
      sender === "user" ? "user-bubble" : "bot-bubble"
    );
    bubble.innerHTML = text; // Usamos innerHTML para renderizar negrito, etc.
    messagesContainer.appendChild(bubble);
    // Rolar para a última mensagem
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const showTypingIndicator = () => {
    const typingBubble = document.createElement("div");
    typingBubble.id = "typing-indicator";
    typingBubble.classList.add("chat-bubble", "bot-bubble", "typing-indicator");
    typingBubble.innerHTML = "<span></span><span></span><span></span>";
    messagesContainer.appendChild(typingBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const removeTypingIndicator = () => {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) {
      indicator.remove();
    }
  };

  // --- Lógica Principal de Envio ---
  const handleSendMessage = async () => {
    const messageText = userInput.value.trim();
    if (messageText === "") return;

    // 1. Adiciona a mensagem do usuário à UI e ao histórico
    addMessageToUI("user", messageText);
    conversationHistory.push({ role: "user", parts: [{ text: messageText }] });
    userInput.value = "";

    // 2. Mostra o indicador "digitando..."
    showTypingIndicator();

    try {
      // 3. Envia a mensagem para o backend
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          history: conversationHistory.slice(0, -1), // Envia histórico sem a última msg
        }),
      });

      removeTypingIndicator();

      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await response.json();

      // 4. Adiciona a resposta do bot à UI e ao histórico
      if (data.textResponse) {
        addMessageToUI("bot", data.textResponse);
        conversationHistory.push({
          role: "model",
          parts: [{ text: data.textResponse }],
        });
      }

      // 5. Verifica se há uma ordem de redirecionamento
      if (data.redirectTo) {
        setTimeout(() => {
          closeChat();
          conversationHistory = [];

          // Procura, no mapa, o item cujo redirectTo coincide com o que veio da API
          const mapping = Object.values(menuRedirectMap).find(
            (item) => item.redirectTo === data.redirectTo
          );

          if (mapping?.url) {
            window.location.assign(mapping.url); // ou router.push(mapping.url)
          } else {
            console.warn("URL não definida para", data.redirectTo);
          }
        }, 1500);
      }
    } catch (error) {
      console.error("Falha ao comunicar com o servidor:", error);
      removeTypingIndicator();
      addMessageToUI(
        "bot",
        "Desculpe, estou com problemas para me conectar. Tente novamente mais tarde."
      );
    }
  };

  // --- Event Listeners ---
  chatInitiator.addEventListener("click", openChat);
  closeChatBtn.addEventListener("click", closeChat);
  sendBtn.addEventListener("click", handleSendMessage);
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  });
});
