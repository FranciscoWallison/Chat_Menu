// src/server.js
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import { runConversation } from './geminiService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());

/* ---------- 1) Arquivos estáticos ---------- */
//  "../public" porque server.js está em src/
app.use(express.static(path.join(__dirname, '..', 'public')));

/* ---------- 2) Rota raiz opcional ---------- */
// Se você quiser garantir que "/" sempre serve index.html:
// app.get('/', (_req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

/* ---------- 3) API de chat ---------- */
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'O campo "message" é obrigatório.' });
    }
    const response = await runConversation(message, history);
    res.status(200).json(response);
  } catch (error) {
    console.error('[Erro no Servidor]', error);
    res.status(500).json({ error: 'Ocorreu um erro ao processar sua solicitação.' });
  }
});

/* ---------- 4) Boot ---------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('• Rota raiz:           GET /  (serve public/index.html)');
  console.log('• Endpoint de chat:    POST /api/chat');
});

export default app; // útil para testes, se precisar
