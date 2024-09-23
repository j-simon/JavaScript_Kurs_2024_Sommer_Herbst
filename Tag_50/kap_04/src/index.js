// Strikter Modus für sichereres JavaScript, um bestimmte Fehler zu vermeiden
'use strict';

// Konfigurationsobjekt für das Phaser-Spiel
const config = {
  // Automatische Auswahl der Rendering-Methode (Canvas oder WebGL)
  type: Phaser.AUTO,
  
  // Breite des Spiels wird auf 640 Pixel festgelegt
  width: 640,
  
  // Höhe des Spiels wird auf die Höhe des Browserfensters gesetzt
  height: window.innerHeight,
  
  // Konfiguration für die Physik-Engine (Arcade-Physik wird verwendet)
  physics: {
    // Standard-Physiksystem ist 'arcade'
    default: 'arcade',
    
    // Spezifische Einstellungen für die Arcade-Physik
    arcade: {
      // Schwerkraft wirkt in Y-Richtung mit einer Stärke von 300
      gravity: { y: 300 },
      
      // Debug-Modus aktivieren, um Kollisionen zu sehen
      debug: true,
    },
  },
  
  // Szenen des Spiels, die in drei Phasen aufgeteilt sind
  scene: {
    preload: preload,   // Lädt die Ressourcen vor dem Spielstart
    create: create,     // Erstellt die Spiellogik und das Spiellayout
    update: update,     // Aktualisiert die Spiel-Logik in jedem Frame
  },
};

// Erstellt ein neues Phaser-Spiel mit der angegebenen Konfiguration
const game = new Phaser.Game(config);

// Variablen für den Spieler und die Plattformen
let player;
let platforms;

// Event-Listener, um das Spiel neu zu skalieren, wenn das Fenster seine Größe ändert
window.addEventListener(
  'resize',                 // Bei Fenstergrößenänderung
  function () {
    // Skaliert das Spiel neu basierend auf der aktuellen Fensterhöhe
    game.scale.resize(config.width, window.innerHeight);
  },
  false                     // Der Listener wird in der Blasenphase ausgeführt
);

// preload-Funktion: Lädt die Bilder und andere Assets vor dem Start des Spiels
function preload() {
  // Hintergrundbild wird geladen
  this.load.image('background_img', 'assets/background.png');

  // Übung 01: Spieler-Sprite wird geladen
  this.load.image('playerSprite', 'assets/player.png');

  // Übung 02: Plattform-Sprite wird geladen
  this.load.image('platform', 'assets/game-tiles.png');
}

// create-Funktion: Erstellen und Initialisieren der Spielobjekte
function create() {
  // Hintergrundbild wird an Position (0, 0) hinzugefügt
  this.add.image(0, 0, 'background_img').setOrigin(0, 0);

  // Spieler-Sprite wird an der Position (325, -100) hinzugefügt und Physik angewendet
  // y=-100 ist weit oberhalb des sichtbaren Anfangs des Browserfensters
  player = this.physics.add.sprite(325, -100, 'playerSprite');
  // player = this.physics.add.sprite(325, 200, 'playerSprite');

  // Erstellen einer statischen Gruppe für die Plattformen
  platforms = this.physics.add.staticGroup();

  // Plattform wird an Position (325, 0) erstellt, also y=0, ganz oben!
   platforms.create(325, 100, 'platform');

  // Kollisionserkennung zwischen dem Spieler und den Plattformen wird hinzugefügt
  this.physics.add.collider(platforms,player); 
}

// update-Funktion: Wird in jedem Frame aufgerufen, um die Spiel-Logik zu aktualisieren
function update() {}
