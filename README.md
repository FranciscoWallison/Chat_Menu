# Assistente Conversacional com Gemini para Navegação em App

[screen-recorder-thu-jul-03-2025-01-04-23.webm](https://github.com/user-attachments/assets/4a5427df-8d6a-43e9-ab13-e51ef1390dc9)

O back-end tem como api  um assistente conversacional, utilizando a API do Google Gemini. O objetivo do assistente é entender as solicitações do usuário em linguagem natural e guiá-lo para a seção correta de um aplicativo de plano odontológico, servindo como uma interface de navegação por voz ou texto.

O repositório inclui o servidor backend em Node.js e um arquivo de demonstração frontend (`index.html`) para testar a interação completa.

## Funcionalidades Principais

* **Compreensão de Linguagem Natural (NLU):** Utiliza o poder do modelo Gemini para interpretar uma vasta gama de solicitações do usuário, desde comandos diretos ("Quero ver meu histórico de pagamentos") até perguntas complexas ("Paguei a fatura duas vezes, como confirmo?").
* **Conversa Contextual:** Mantém um histórico da conversa para entender perguntas de acompanhamento e fornecer respostas mais coesas.
* **Uso de Ferramentas (Function Calling):** O Gemini foi treinado para usar uma "ferramenta" interna (`MapsToSection`) que lhe permite decidir quando o usuário deve ser redirecionado e para qual seção específica do app.
* **Respostas Dinâmicas:** O assistente pode responder com texto (para fazer perguntas de esclarecimento) ou com uma instrução de redirecionamento para o frontend.
* **Lógica de Fallback Inteligente:** Quando a intenção não é clara, o assistente é instruído a fazer perguntas para obter mais detalhes, em vez de simplesmente dizer "não entendi".
* **Frontend de Demonstração:** Um arquivo `index.html` autocontido que simula a interface de um aplicativo mobile, permitindo testar o fluxo de ponta a ponta.

## Tecnologias Utilizadas

* **Backend:**
    * [Node.js](https://nodejs.org/)
    * [Express.js](https://expressjs.com/)
* **Inteligência Artificial:**
    * [Google Gemini API](https://ai.google.dev/) (`@google/generative-ai`)
* **Frontend (Demo):**
    * HTML5, CSS3, JavaScript
    * [Ionic Framework](https://ionicframework.com/) (componentes via CDN para a UI)


## ⚙️ Instalação e Execução

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/download/) (versão 18 ou superior)
* Uma chave de API do Google Gemini (disponível no [Google AI Studio](https://aistudio.google.com/))

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd <nome-do-repositorio>
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Configure suas variáveis de ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Adicione sua chave da API do Gemini a este arquivo:
        ```env
        GEMINI_API_KEY="SUA_CHAVE_API_DO_GEMINI_AQUI"
        ```

4.  **Inicie o servidor backend:**
    ```bash
    npm start
    ```
    Você deverá ver a seguinte mensagem no terminal, indicando que o servidor está pronto:
    ```
    Servidor de conversação rodando na porta 3000
    Endpoint de chat disponível em: POST http://localhost:3000/api/chat
    ```

## 🕹️ Como Usar

Com o servidor rodando, você pode interagir com o assistente de duas formas:

### 1. Usando a Demo Frontend

* Abra o arquivo `index.html` diretamente em seu navegador.
* Clique na barra superior com o texto "Do que você precisa?".
* A interface de chat será aberta. Digite sua pergunta e veja a mágica acontecer!

### 2. Testando a API Diretamente (via cURL)

Você pode enviar requisições `POST` para o endpoint `/api/chat`.

**Corpo da Requisição:**

```json
{
  "message": "A mensagem do usuário aqui",
  "history": [] // Opcional: histórico da conversa
}
```

**Exemplo de Requisição (Navegação):**

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"message\": \"quero ver o que meu plano cobre\"}" http://localhost:3000/api/chat
```

**Resposta Esperada:**

```json
{
    "textResponse": "Claro! Estou te redirecionando para **Minha cobertura**.",
    "redirectTo": "Minha cobertura",
    "message": "Usuário deseja visualizar os detalhes da sua cobertura."
}
```

**Exemplo de Requisição (Esclarecimento):**

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"message\": \"preciso de ajuda com o financeiro\"}" http://localhost:3000/api/chat
```

**Resposta Esperada:**

```json
{
    "textResponse": "Com certeza! Sobre o financeiro, você gostaria de ver seu histórico de pagamentos, atualizar a forma de pagamento ou solicitar a carta de quitação?"
}
```

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.
