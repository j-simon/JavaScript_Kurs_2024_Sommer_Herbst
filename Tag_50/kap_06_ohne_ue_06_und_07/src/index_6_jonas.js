const config = {
  type: Phaser.AUTO,  // Wählt automatisch WebGL oder Canvas, je nach Browserunterstützung.
  width: 620,  // Breite des Spiels.
  height: window.innerHeight,  // Höhe des Spiels wird an die Fensterhöhe angepasst.
  physics: {
    default: 'arcade',  // Verwendet die Arcade-Physik-Engine.
    arcade: {
      gravity: { y: 300 },  // Schwerkraft in y-Richtung, 300 Pixel pro Sekunde.
      debug: true,  // Aktiviert das Debuggen, um physikalische Grenzen anzuzeigen.
    },
  },
  scene: {
    preload: preload,  // Lädt alle Assets vor (Bilder, etc.).
    create: create,  // Erstellt das Spiel und initialisiert die Objekte.
    update: update,  // Spiel-Logik, die bei jedem Frame aufgerufen wird.
  },
};

const game = new Phaser.Game(config);  // Erstellt ein neues Spiel mit der obigen Konfiguration.
let player;  // Variable für den Spieler.
let platforms;  // Variable für die Plattformen.
let aKey;  // Variable für die A-Taste (links).
let dKey;  // Variable für die D-Taste (rechts).
let gameOverDistance = 0;  // Variable für die maximale Distanz, nach der das Spiel endet.

// ue_03,alternative Cursor/Pfeil-Tasten-Steuerung
let cursors;

window.addEventListener(
  'resize',
  function () {
    game.scale.resize(config.width, window.innerHeight);  // Passt die Spielhöhe an, wenn das Fenster neu skaliert wird.
  },
  false
);

function preload() {
  // Lädt die Grafiken (Assets) für das Spiel.
  this.load.image('background_img', 'assets/background.png');  // Hintergrundbild.
  this.load.image('playerSprite', 'assets/player.png');  // Spielerbild.
  // ue_04
  this.load.image('playerJumpSprite', 'assets/player_jump.png');  // Spielerbild beim Springen.
  this.load.image('platform', 'assets/game-tiles.png');  // Plattformbild.
}

function create() {
  // Setzt den Hintergrund und die Spielfiguren.
  // this.add.image(0, 0, 'background_img').setOrigin(0, 0);  // hier hat Jonas etwas vergessen!! Füge Hintergrundbild hinzu.
  this.add.image(0, 0, 'background_img').setOrigin(0, 0).setScrollFactor(0);  // Füge Hintergrundbild hinzu.

  // Erstellt den Spieler-Charakter.
  player = this.physics.add.sprite(325, -100, 'playerSprite');  // Erstellt die Spieler-Sprite.
  player.setBounce(0, 1);  // Setzt den Rückprall-Effekt des Spielers.
  player.setVelocityY(-400);  // Setzt die Anfangsgeschwindigkeit nach oben.
  player.body.setSize(64, 90);  // Setzt die Größe des Spielerkörpers.
  player.body.setOffset(32, 30);  // Setzt den Offset (Abstand) des Körpers.
  player.setDepth(10);  // Setzt die Tiefe (z-index) des Spielers.
player.se
  //ue_04
  // Animation für den Sprung erstellen.
  this.anims.create({
    key: 'jump',  // Animation-Schlüssel.
    frames: [{ key: 'playerJumpSprite' }, { key: 'playerSprite' }],  // Definiert die Frames.
    frameRate: 10,  // Bildwiederholrate der Animation.
    repeat: 0,  // Animation soll nicht wiederholt werden.
  });

  // Erstellt die Plattformen, auf denen der Spieler springt.
  platforms = this.physics.add.staticGroup();
  platforms.create(325, 0, 'platform');  // Erstellt erste Plattform.
  platforms.create(Phaser.Math.Between(0, 640), -200, 'platform');  // Weitere Plattformen an zufälligen x-Positionen.
  platforms.create(Phaser.Math.Between(0, 640), -400, 'platform');
  platforms.create(Phaser.Math.Between(0, 640), -600, 'platform');
  platforms.create(Phaser.Math.Between(0, 640), -800, 'platform');
  platforms.create(Phaser.Math.Between(0, 640), -1000, 'platform');
  platforms.create(Phaser.Math.Between(0, 640), -1200, 'platform');
  platforms.create(Phaser.Math.Between(0, 640), -1400, 'platform');

  // Deaktiviert Kollisionen auf bestimmten Seiten der Plattformen.
  platforms.children.iterate(function (platform) {
    platform.body.checkCollision.down = false;  // Keine Kollision von unten.
    platform.body.checkCollision.left = false;  // Keine Kollision von links.
    platform.body.checkCollision.right = false;  // Keine Kollision von rechts.
  });

  // Fügt Kollision zwischen Spieler und Plattformen hinzu.
  this.physics.add.collider(player, platforms, (playerObj, platformObj) => {
    if (platformObj.body.touching.up && playerObj.body.touching.down) {
      player.setVelocityY(-400);  // Spieler springt erneut nach oben.
      // ue_04
      player.anims.play('jump', true);  // Spielt die Sprunganimation.
    }
  });

  // Plattformen sollen ihre Position ändern, wenn sie kollidieren.
  this.physics.add.collider(platforms, platforms, (collider) => {
    collider.x = Phaser.Math.Between(0, 640);  // Setzt die Plattform an eine neue x-Position.
    collider.refreshBody();  // Aktualisiert die Kollisionseigenschaften.
  });

  // Kamera folgt dem Spieler in der Vertikalen.
  this.cameras.main.startFollow(player, false, 0, 1);


  // Fügt Tasten-Eingaben hinzu (A für links, D für rechts).
  aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true, true);
  dKey = this.input.keyboard.addKey('D', true, true);
  // ue_03:alternative zu a und d
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // ue_03:Pfeiltastensteuerung
  if (cursors.left.isDown && !cursors.right.isDown) {
    player.x > 32 ? player.setVelocityX(-300) : player.setVelocityX(0);
  }
  if (cursors.right.isDown && !cursors.left.isDown) {
    player.x < 608 ? player.setVelocityX(300) : player.setVelocityX(0);
  }
  if (!cursors.left.isDown && !cursors.right.isDown) {
    player.setVelocityX(0);
  }

  // Aktualisiert die Spielzustände in jedem Frame.
  // if (aKey.isDown && !dKey.isDown) {
  //   if (player.x > 32) {
  //     player.setVelocityX(-300);  // Bewegt den Spieler nach links.
  //     player.flipX = true;  // Spiegelt den Spieler.
  //   } else {
  //     player.setVelocityX(0);  // Stoppt die Bewegung, wenn der Spieler zu weit links ist.
  //   }
  // }
  // if (dKey.isDown && !aKey.isDown) {
  //   if (player.x < 608) {
  //     player.setVelocityX(300);  // Bewegt den Spieler nach rechts.
  //     player.flipX = false;  // Spiegelt den Spieler nicht.
  //   } else {
  //     player.setVelocityX(0);  // Stoppt die Bewegung, wenn der Spieler zu weit rechts ist.
  //   }
  // }
  // if (!aKey.isDown && !dKey.isDown) {
  //   player.setVelocityX(0);  // Stoppt die Bewegung, wenn keine Taste gedrückt wird.
  // }



  // Überprüft, ob Plattformen zu weit oben sind und setzt sie zurück.
  platforms.children.iterate(function (platform) {
    if (platform.y > player.y && player.body.center.distance(platform.body.center) > 700) {
      platform.x = Phaser.Math.Between(0, 640);  // Setzt die Plattform zufällig in X-Position.
      platform.y = platform.y - Phaser.Math.Between(1150, 1200);  // Senkt die Plattform.
      platform.refreshBody();  // Aktualisiert den Körper der Plattform.
    }
  });

  // Spielende-Logik: Pausiert das Spiel, wenn der Spieler zu weit fällt.
  if (player.body.y > gameOverDistance) {
    this.physics.pause();  // Pausiert die Physik.
  } else if (player.body.y * -1 - gameOverDistance * -1 > 600) {
    gameOverDistance = player.body.y + 600;  // Aktualisiert die Spielende-Distanz.
  }
}
