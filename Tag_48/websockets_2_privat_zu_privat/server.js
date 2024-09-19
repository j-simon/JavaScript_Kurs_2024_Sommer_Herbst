const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Express und HTTP-Server initialisieren
const app = express();
const server = http.createServer(app);

// Socket.io auf dem Server initialisieren
const io = socketIo(server);

// Map zur Zuordnung von Benutzernamen zu Socket-IDs
const benutzerListe = {};

// Statische Dateien aus dem Verzeichnis "public" bereitstellen
app.use(express.static('public'));

// Auf neue Client-Verbindungen warten
io.on('connection', (socket) => {
    console.log('Ein Benutzer ist verbunden:', socket.id);

    // Wenn der Benutzer seinen Namen angibt, speichern wir ihn
    socket.on('setze benutzername', (name) => {
        benutzerListe[name] = socket.id;
        socket.benutzername = name;
        console.log(`Benutzername gesetzt für ${socket.id}: ${name}`);
        console.log('Aktuelle Benutzerliste:', benutzerListe);
    });

    // Auf private Nachrichten hören
    socket.on('private nachricht', ({ empfaengerName, nachricht }) => {
        const empfaengerId = benutzerListe[empfaengerName];

        if (empfaengerId) {
            console.log(`Private Nachricht von ${socket.benutzername} an ${empfaengerName}: ${nachricht}`);

            // Sende die Nachricht nur an den angegebenen Empfänger
            io.to(empfaengerId).emit('private nachricht', {
                absenderName: socket.benutzername,
                nachricht
            });
        } else {
            socket.emit('nachricht fehler', `Benutzer ${empfaengerName} nicht gefunden.`);
        }
    });

    // Wenn der Benutzer die Verbindung trennt, entfernen wir ihn aus der Liste
    socket.on('disconnect', () => {
        if (socket.benutzername) {
            delete benutzerListe[socket.benutzername];
        }
        console.log('Ein Benutzer hat die Verbindung getrennt:', socket.id);
        console.log('Aktuelle Benutzerliste:', benutzerListe);
    });
});

// Server starten
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
