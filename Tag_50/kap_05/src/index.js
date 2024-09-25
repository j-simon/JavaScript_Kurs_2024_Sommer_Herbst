// Konfiguration für das Spiel
const config = {
  type: Phaser.AUTO, // Automatische Auswahl des Renderers
  width: 620, // Breite des Spiels
  height: window.innerHeight, // Höhe des Spiels basierend auf der Fensterhöhe
  physics: {
    default: 'arcade', // Verwendung des Arcade-Physik-Systems
    arcade: {
      gravity: { y: 300 }, // Schwerkraft in vertikaler Richtung
      debug: true, // Debugging für Physik-Objekte aktivieren
    },
  },
  scene: {
    preload: preload, // Funktion zum Laden von Assets
    create: create, // Funktion zum Erstellen der Spielszene
    update: update, // Funktion für das Spiel-Update
  },
};

// Erstellen des Spiels mit der oben definierten Konfiguration
const game = new Phaser.Game(config);
let player; // Spieler-Objekt
let platforms; // Plattformen-Gruppe
let aKey; // Taste A für Linksbewegung
let dKey; // Taste D für Rechtsbewegung

// ue_03,alternative Cursor/Pfeil-Tasten-Steuerung
let cursors;

// Event-Listener für das Resize-Event des Fensters
window.addEventListener(
  'resize',
  function () {
    game.scale.resize(config.width, window.innerHeight); // Größe des Spiels anpassen
  },
  false
);

// Funktion zum Laden der benötigten Assets
function preload() {
  this.load.image('background_img', 'assets/background.png'); // Hintergrundbild laden
  this.load.image('playerSprite', 'assets/player.png'); // Spieler-Sprite laden
  // ue_04
  this.load.image('playerJumpSprite', 'assets/player_jump.png'); // Sprung-Sprite laden
  this.load.image('platform', 'assets/game-tiles.png'); // Plattform-Sprite laden
}

// Funktion zum Erstellen der Spielszene
function create() {
  this.add.image(0, 0, 'background_img').setOrigin(0, 0).setScrollFactor(0); // Hintergrund hinzufügen

  // Spieler-Objekt erstellen und physikalische Eigenschaften festlegen
  player = this.physics.add.sprite(325, -100, 'playerSprite');
  player.setBounce(0, 1); // Rückprallverhalten
  player.setVelocityY(-400); // Anfangsgeschwindigkeit nach oben

  // Animation für den Sprung erstellen
  this.anims.create({
    key: 'jump',
    frames: [{ key: 'playerJumpSprite' }, { key: 'playerSprite' }],
    frameRate: 10, // Animationsgeschwindigkeit
    repeat: 0, // Animation wird nicht wiederholt
  });

  // Statische Plattformen-Gruppe erstellen
  platforms = this.physics.add.staticGroup();
  platforms.create(325, 0, 'platform'); // Plattform erstellen

  // Kollision zwischen Spieler und Plattformen
  this.physics.add.collider(player, platforms, () => {
    // ue_04
    player.anims.play('jump', true); // Sprung-Animation abspielen
    ///player.setVelocityY(-400)
  });

  // Kamera folgt dem Spieler in der Vertikalen.
   this.cameras.main.startFollow(player, false, 0, 1);

  // Tasten für die Bewegung hinzufügen
  aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true, true);
  dKey = this.input.keyboard.addKey('D', true, true);
 
  // ue_03:alternative zu a und d
  cursors = this.input.keyboard.createCursorKeys();
}

// Funktion für das Update-Loop des Spiels
function update() {
  // ue_03:Pfeiltastensteuerung
  // if (cursors.left.isDown && !cursors.right.isDown) {
  //   player.x > 32 ? player.setVelocityX(-300) : player.setVelocityX(0);
  // }
  // if (cursors.right.isDown && !cursors.left.isDown) {
  //   player.x < 608 ? player.setVelocityX(300) : player.setVelocityX(0);
  // }
  // if (!cursors.left.isDown && !cursors.right.isDown) {
  //   player.setVelocityX(0);
  // }

  // Bewegungen basierend auf Tasteneingaben
  if (aKey.isDown && !dKey.isDown) { // links
    player.x > 32 ? player.setVelocityX(-300) : player.setVelocityX(0); // Linksbewegung
  }
  if (dKey.isDown && !aKey.isDown) { // rechts
    player.x < 608 ? player.setVelocityX(300) : player.setVelocityX(0); // Rechtsbewegung
  }
  if (!aKey.isDown && !dKey.isDown) {
    player.setVelocityX(0); // Keine Bewegung
  }
}
