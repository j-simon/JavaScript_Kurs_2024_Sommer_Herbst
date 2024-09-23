// Konfigurationsobjekt für das Phaser-Spiel
const config = {
  type: Phaser.AUTO, // Automatische Auswahl des Renderers (WebGL oder Canvas)
  width: 640, // Festgelegte Breite des Spiels (640 Pixel)
  height: window.innerHeight, // Höhe des Spiels passt sich der Höhe des Browserfensters an
  scene: {
    preload: preload, // Verweis auf die preload-Funktion
    create: create,   // Verweis auf die create-Funktion
    update: update,   // Verweis auf die update-Funktion
  },
};

// Erstellen des Phaser-Spiels mit der obigen Konfiguration
const game = new Phaser.Game(config);

// Fügt ein Event hinzu, das bei Änderung der Fenstergröße ausgeführt wird
window.addEventListener(
  'resize',
  function () {
    // Passt die Höhe des Spiels an die neue Fenstergröße an, Breite bleibt gleich
    game.scale.resize(config.width, window.innerHeight);
  },
  false
);

// Funktion, die Ressourcen lädt, bevor das Spiel startet
function preload() {
  console.log("preload"); // Ausgabe für Debugging
}

// Funktion, die beim Erstellen der Szene aufgerufen wird
function create() {
  console.log("create"); // Ausgabe für Debugging
}

// Funktion, die in jedem Frame aufgerufen wird, um das Spiel zu aktualisieren
function update() {
  console.log("update"); // Ausgabe für Debugging
  
}
