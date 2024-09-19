const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Express und HTTP-Server initialisieren
const app = express();
const server = http.createServer(app);

// Socket.io auf dem Server initialisieren
const io = socketIo(server);

// Statische Dateien aus dem Verzeichnis "public" bereitstellen
app.use(express.static('public'));

// Auf neue Client-Verbindungen warten
io.on('connection', (socket) => {
  console.log('Ein Benutzer ist verbunden:', socket.id);

  // Auf Nachrichten vom Client hören (Ereignis: "chat nachricht")
  socket.on('chat nachricht', async (nachricht) => {
    console.log('Nachricht empfangen:', nachricht);

    // ALT Die Nachricht an alle verbundenen Clients senden
    // io.emit('chat nachricht', nachricht);

    // NEU Die Nachricht und die KI-Antwort an alle verbundenen Clients senden
    // io.emit('chat nachricht', nachricht);

    // Hugging Face API Aufruf (ohne Anmeldung möglich, direkt per POST)
    const HUGGING_FACE_TOKEN = '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'; // Ersetze dies durch deinen Hugging Face Token

    // const response = await fetch('https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B', {
    // const response = await fetch('https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-1-pythia-12b', {
    const response = await fetch('https://api-inference.huggingface.co/models/openai-community/gpt2', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUGGING_FACE_TOKEN}`
      },
      body: JSON.stringify({ inputs: nachricht }),
    });
    const result = await response.json();
    console.log('result --->', result);

    io.emit('chat nachricht', nachricht + " " + result[0].generated_text);



  });

  // Wenn der Benutzer die Verbindung trennt
  socket.on('disconnect', () => {
    console.log('Ein Benutzer hat die Verbindung getrennt:', socket.id);
  });
});

// Server starten
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
