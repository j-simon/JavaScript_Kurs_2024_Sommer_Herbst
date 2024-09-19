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
    socket.on('chat nachricht', (nachricht) => {
        console.log('Nachricht empfangen:', nachricht);

        // save to database !!!

        // Die Nachricht an alle verbundenen Clients senden
        io.emit('chat nachricht', nachricht);
    });

    // Wenn der Benutzer die Verbindung trennt
    // socket.on('disconnect', () => {
    //     console.log('Ein Benutzer hat die Verbindung getrennt:', socket.id);
    // });
});

// Server starten
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
