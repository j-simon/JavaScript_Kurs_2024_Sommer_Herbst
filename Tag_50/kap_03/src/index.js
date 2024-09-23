// Konfigurationsobjekt für das Phaser-Spiel
const config = {
  // Automatische Auswahl der Rendering-Methode (Canvas oder WebGL)
  type: Phaser.AUTO,
  
  // Breite des Spielbereichs auf 640 Pixel festgelegt
  width: 640,
  
  // Höhe des Spielbereichs auf die Höhe des Browserfensters eingestellt
  height: window.innerHeight,
  
  // Szenen des Spiels: preload, create und update Funktionen werden verwendet
  scene: {
    preload: preload,   // Lädt Ressourcen vor dem Start des Spiels
    create: create,     // Erstellt das Spiel, nachdem die Ressourcen geladen wurden
    update: update,     // Spiel-Logik wird in jedem Frame aktualisiert
  },
};

// Erstellt ein neues Phaser-Spiel mit der angegebenen Konfiguration
const game = new Phaser.Game(config);

// Event-Listener, der das Spiel an die Größe des Fensters anpasst, wenn es verändert wird
window.addEventListener(
  'resize',                 // Bei Größenänderung des Fensters
  function () {
    // Skaliert das Spiel neu, basierend auf der aktuellen Fensterhöhe
    game.scale.resize(config.width, window.innerHeight);
  },
  false                     // False bedeutet, dass der Event-Listener in der (bubbeling)Blasenphase aktiviert wird
);

// preload-Funktion: Lädt die Bilder und andere Assets des Spiels
function preload() {
  // Lädt ein Bild mit dem Namen 'background_img' aus dem Ordner 'assets'
  this.load.image('background_img', 'assets/background.png');
  this.load.image('player_img', 'assets/player.png');
  
}

// create-Funktion: Platziert die geladenen Assets auf dem Bildschirm
function create() {
  // Fügt das geladene Bild hinzu, wobei die Position auf den oberen linken Rand gesetzt wird (0, 0)
 
  
  this.add.image(0, 0, 'background_img').setOrigin(0, 0);
  this.add.image(300,400,"player_img").setOrigin(0,0)
}

// update-Funktion: Wird in jedem Frame aufgerufen, um die Spiel-Logik zu aktualisieren
function update() {}
