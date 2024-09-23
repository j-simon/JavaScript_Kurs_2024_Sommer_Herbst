// Konfiguration für das Phaser-Spiel
const config = {
    type: Phaser.AUTO, // Phaser wählt automatisch WebGL oder Canvas basierend auf der Browserunterstützung
    width: 620, // Breite des Spielbereichs
    height: window.innerHeight, // Höhe des Spielbereichs passt sich der Fenstergröße an
    physics: {
      default: 'arcade', // Arcade-Physik für einfache Kollisionen und Schwerkraft
      arcade: {
        gravity: { y: 300 }, // Schwerkraft auf die Y-Achse anwenden (300)
        debug: true, // Kollisionen und Physik in der Konsole sichtbar machen
      },
    },
    scene: {
      preload: preload, // Ressourcen werden in der preload-Funktion geladen
      create: create,   // Die Spielszene wird in create initialisiert
      update: update,   // Die Spiellogik wird in update regelmäßig ausgeführt
    },
  };
  
  // Phaser Spielinstanz erstellen
  const game = new Phaser.Game(config);
  
  let player;
  let platforms;
  let aKey;
  let dKey;
  let gameOverDistance = 0; // Zählt, wann das Spiel enden soll
  
  // Anpassung der Spielfenstergröße, wenn das Browserfenster geändert wird
  window.addEventListener('resize', function () {
    game.scale.resize(config.width, window.innerHeight);
  }, false);
  
  // Vorladefunktion für Ressourcen
  function preload() {
    this.load.image('background_img', 'assets/background.png'); // Hintergrundbild laden
    this.load.image('playerSprite', 'assets/player.png'); // Spielerbild laden
    this.load.image('playerJumpSprite', 'assets/player_jump.png'); // Bild für den Spieler im Sprung
    this.load.image('platform', 'assets/game-tiles.png'); // Plattformbild laden
  }
  
  // Erstellen der Szene
  function create() {
    // Hintergrundbild einfügen
    this.add.image(0, 0, 'background_img').setOrigin(0, 0).setScrollFactor(0);
  
    // Spieler-Sprite mit Physik hinzufügen
    player = this.physics.add.sprite(325, -100, 'playerSprite');
    player.setBounce(0, 1); // Spieler soll nicht sehr stark abprallen
    player.setVelocityY(-400); // Startgeschwindigkeit nach oben
    player.body.setSize(64, 90); // Anpassung der Größe der Kollisionsbox
    player.body.setOffset(32, 30); // Verschiebung der Kollisionsbox
    player.setDepth(10); // Spieler auf eine höhere Zeichenebene setzen
  
    // Animation für den Sprung des Spielers erstellen
    this.anims.create({
      key: 'jump', // Name der Animation
      frames: [{ key: 'playerJumpSprite' }, { key: 'playerSprite' }], // Frames der Animation
      frameRate: 10, // Animationsgeschwindigkeit
      repeat: 0, // Animation nicht wiederholen
    });
  
    // Statische Plattformen erzeugen
    platforms = this.physics.add.staticGroup();
    platforms.create(325, 0, 'platform'); // Erstellen von Plattformen an verschiedenen Positionen
    // ue_05
    platforms.create(Phaser.Math.Between(0, 640), -200, 'platform');
    platforms.create(Phaser.Math.Between(0, 640), -400, 'platform');
    platforms.create(Phaser.Math.Between(0, 640), -600, 'platform');
    platforms.create(Phaser.Math.Between(0, 640), -800, 'platform');
    platforms.create(Phaser.Math.Between(0, 640), -1000, 'platform');
    platforms.create(Phaser.Math.Between(0, 640), -1200, 'platform');
    platforms.create(Phaser.Math.Between(0, 640), -1400, 'platform');
  
    // Kollisionsprüfungen für jede Plattform deaktivieren (außer oben)
    platforms.children.iterate(function (platform) {
      // platform.body.checkCollision.down = false;
      platform.body.checkCollision.left = false;
      platform.body.checkCollision.right = false;
    });
  
    // Kollision zwischen Spieler und Plattform
    this.physics.add.collider(player, platforms, (playerObj, platformObj) => {
      if (platformObj.body.touching.up && playerObj.body.touching.down) {
        // ue_05
        player.anims.play('jump', true); // Sprunganimation abspielen
        player.setVelocityY(-400); // Spieler springt erneut, wenn er auf einer Plattform landet
      }
    });
  
    // Plattformkollisionen aktualisieren und Plattformen neu positionieren
    this.physics.add.collider(platforms, platforms, (collider) => {
      collider.x = Phaser.Math.Between(0, 640); // Zufällige x-Position für Plattformen
      collider.refreshBody(); // Physik für die neu positionierte Plattform aktualisieren
    });
  
    // Kamera folgt dem Spieler in der Vertikalen
    this.cameras.main.startFollow(player, false, 0, 1);
  
    // Steuerung durch Tastatur (A und D)
    aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true, true);
    dKey = this.input.keyboard.addKey('D', true, true);
  }
  
  // Spiel-Updatefunktion, die bei jedem Frame ausgeführt wird
  function update() {
    // Bewegung nach links
    if (aKey.isDown && !dKey.isDown) {
      if (player.x > 32) {
        player.setVelocityX(-300); // Geschwindigkeit nach links setzen
        player.flipX = true; // Spieler horizontal spiegeln
      } else {
        player.setVelocityX(0);
      }
    }
  
    // Bewegung nach rechts
    if (dKey.isDown && !aKey.isDown) {
      if (player.x < 608) {
        player.setVelocityX(300); // Geschwindigkeit nach rechts setzen
        player.flipX = false; // Spiegelung aufheben
      } else {
        player.setVelocityX(0);
      }
    }
  
    // Stoppt Bewegung, wenn keine Taste gedrückt wird
    if (!aKey.isDown && !dKey.isDown) {
      player.setVelocityX(0);
    }
  
    // Plattformen neu positionieren, wenn sie unterhalb des Spielers verschwinden
    platforms.children.iterate(function (platform) {
      if (platform.y > player.y && player.body.center.distance(platform.body.center) > 700) {
        platform.x = Phaser.Math.Between(0, 640); // Zufällige neue x-Position
        platform.y = platform.y - Phaser.Math.Between(1150, 1200); // Neue y-Position weiter oben
        platform.refreshBody(); // Plattform aktualisieren
      }
    });
  
    // Spiel beenden, wenn der Spieler aus dem Bildschirm fällt
    if (player.body.y > gameOverDistance) {
      this.physics.pause(); // Das Spiel anhalten
    } else if (player.body.y * -1 - gameOverDistance * -1 > 600) {
      gameOverDistance = player.body.y + 600; // Aktualisiert den Punkt für das Spielende
    }
  }
  