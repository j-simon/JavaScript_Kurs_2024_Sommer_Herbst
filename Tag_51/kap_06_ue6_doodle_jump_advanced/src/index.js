const config = {
    type: Phaser.AUTO, // Phaser wählt automatisch WebGL oder Canvas für die Grafikdarstellung
    width: 620, // Breite des Spiels
    height: window.innerHeight, // Dynamische Höhe, basierend auf der Fensterhöhe
    physics: {
        default: 'arcade', // Arcade-Physiksystem
        arcade: {
            gravity: { y: 300 }, // Schwerkraft nach unten mit einer Stärke von 300
            debug: true, // Debug-Modus zur Visualisierung von Kollisionen
        },
    },
    scene: {
        preload: preload, // Funktion zum Vorladen von Spiel-Assets
        create: create, // Funktion zum Erstellen von Spielobjekten
        update: update, // Spiel-Update-Funktion, wird in jedem Frame aufgerufen
    },
};

// Ereignis-Listener, der das Spiel neu skaliert, wenn das Fenster die Größe ändert
window.addEventListener(
    'resize',
    function () {
        game.scale.resize(config.width, window.innerHeight); // Höhe wird an Fenstergröße angepasst
    },
    false,
);

const game = new Phaser.Game(config); // Erstellen eines neuen Phaser-Spiels

// Globale Variablen
let player; // Spieler
let platforms; // Plattformen
let aKey, dKey; // Tasten für links/rechts
let gameOverDistance = 0; // Distanz, bei der das Spiel endet
let enemies; // Feinde
let gameOver = false; // Zustand, ob das Spiel zu Ende ist
let spacebar; // Leertaste zum Schießen
let ball; // Geschoss
let score = 0; // Punktestand
let scoreText; // Textanzeige für den Punktestand

// preload: Laden der Spiel-Assets (Bilder, Animationen etc.)
function preload() {
    this.load.image('background_img', 'assets/background.png'); // Hintergrundbild
    this.load.image('playerSprite', 'assets/player.png'); // Spieler-Sprite
    this.load.image('playerJumpSprite', 'assets/player_jump.png'); // Spieler-Sprite beim Springen
    this.load.image('platform', 'assets/game-tiles.png'); // Plattformen
    this.load.image('enemy', 'assets/enemy_default.png'); // Feind-Sprite
    this.load.spritesheet('enemyAnims', 'assets/enemy.png', { frameWidth: 161, frameHeight: 95 }); // Feind-Animationen
    this.load.image('ball', 'assets/ball.png'); // Geschoss (Ball)
    this.load.image('playerShoot', 'assets/player_up.png'); // Spieler-Sprite beim Schießen
}

// create: Initialisierung der Spielobjekte
function create() {
    // Hintergrundbild hinzufügen
    this.add.image(0, 0, 'background_img').setOrigin(0, 0).setScrollFactor(0);

    // Punktestand-Anzeige hinzufügen
    scoreText = this.add.text(16, 336, 'score: 0', { fontSize: '32px', fill: '#000' }).setScrollFactor(0).setDepth(15);

    // Animationsdefinitionen für Spieler und Feinde
    this.anims.create({
        key: 'jump',
        frames: [{ key: 'playerJumpSprite' }, { key: 'playerSprite' }],
        frameRate: 10,
        repeat: 0,
    });

    this.anims.create({
        key: 'shoot',
        frames: [{ key: 'playerShoot' }, { key: 'playerSprite' }],
        frameRate: 10,
        repeat: 0,
    });

    this.anims.create({
        key: 'enemy_fly',
        frames: 'enemyAnims',
        frameRate: 10,
        repeat: -1,
        yoyo: true,
    });

    // Spieler, Plattformen, Feinde und Geschoss erstellen
    createPlayer(this.physics);
    createPlatforms(this.physics);
    createEnemies(this.physics);
    createBall(this.physics);

    // Kollisionserkennung zwischen Spieler und Plattformen
    this.physics.add.collider(player, platforms, (playerObj, platformObj) => {
        if (platformObj.body.touching.up && playerObj.body.touching.down) {
            player.setVelocityY(-400); // Spieler springt nach oben
            player.anims.play('jump', true); // Sprunganimation
        }
    });

    // Kollisionserkennung zwischen Plattformen
    this.physics.add.collider(platforms, platforms, collider => {
        collider.x = Phaser.Math.Between(0, 640); // Zufällige Neupositionierung der Plattform
        collider.refreshBody();
    });

    // Kollisionserkennung zwischen Spieler und Feinden
    this.physics.add.collider(player, enemies, (_, enemy) => {
        this.physics.pause(); // Spiel anhalten
        gameOver = true; // Spielzustand auf "Game Over" setzen
        enemy.anims.stop(); // Feindanimation stoppen
    });

    // Kollisionserkennung zwischen Plattformen und Feinden
    this.physics.add.collider(platforms, enemies, collider => {
        collider.x = Phaser.Math.Between(0, 640); // Zufällige Neupositionierung
        collider.refreshBody();
    });

    // Kollisionserkennung zwischen Feinden und Geschoss (Ball)
    this.physics.add.collider(enemies, ball, (enemy, ball) => {
        enemy.disableBody(true, true); // Feind deaktivieren
        ball.disableBody(true, true); // Geschoss deaktivieren
        score += 100; // Punktestand erhöhen
        scoreText.setText('Score: ' + score); // Punktestand aktualisieren
    });
    
    this.cameras.main.startFollow(player, false, 0, 1);
 
    // Tastatureingaben für Bewegungen und Schießen
    createKeys(this.input.keyboard);
}

// update: Spiel-Logik, die in jedem Frame ausgeführt wird
function update() {
    if (gameOver) return; // Wenn das Spiel vorbei ist, keine weitere Logik ausführen
    checkMovement(); // Spielerbewegung überprüfen
    checkBall(); // Geschoss überprüfen
    checkShoot(); // Schussmechanik überprüfen
    refactorePlatforms(); // Plattformen neu positionieren
    refactoreEnemies(); // Feinde neu positionieren
    checkGameOver(this.physics); // Prüfen, ob das Spiel zu Ende ist
    updateScore(); // Punktestand aktualisieren
}

// Funktion zum Erstellen des Spielers
function createPlayer(physics) {
    player = physics.add.sprite(325, -100, 'playerSprite'); // Spieler-Sprite hinzufügen
    player.setBounce(0, 1); // Sprungverhalten einstellen
    player.setVelocityY(-400); // Startgeschwindigkeit des Spielers
    player.body.setSize(64, 90); // Kollisionsbox anpassen
    player.body.setOffset(32, 30); // Offset der Kollisionsbox
    player.setDepth(10); // Zeichnungsebene festlegen
}

// Funktion zum Erstellen der Plattformen
function createPlatforms(physics) {
    platforms = physics.add.staticGroup(); // Plattformen-Gruppe erstellen
    // Plattformen an zufälligen Positionen erstellen
    platforms.create(325, 0, 'platform');
    for (let i = -200; i >= -2400; i -= 200) {
        platforms.create(Phaser.Math.Between(0, 640), i, 'platform');
    }
    // Kollisionsseiten für die Plattformen einstellen
    platforms.children.iterate(function (platform) {
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
    });
}

// Funktion zum Erstellen der Feinde
function createEnemies(physics) {
    enemies = physics.add.group(); // Feinde-Gruppe erstellen
    enemies.create(Phaser.Math.Between(0, 640), Phaser.Math.Between(-950, -1300), 'enemy'); // Feind hinzufügen
    enemies.children.iterate(function (enemy) {
        enemy.body.setSize(60, 60); // Kollisionsbox anpassen
        enemy.body.setOffset(50, 10); // Offset der Kollisionsbox
        enemy.body.setAllowGravity(false); // Schwerkraft für Feinde deaktivieren
        enemy.anims.play('enemy_fly'); // Feindanimation abspielen
    });
}

// Funktion zum Erstellen des Geschosses (Ball)
function createBall(physics) {
    ball = physics.add.sprite(0, 0, 'ball'); // Geschoss hinzufügen
    ball.active = false; // Anfangs deaktiviert
    ball.body.setAllowGravity(false); // Schwerkraft deaktivieren
}

// Funktion zum Erstellen der Tastatursteuerung
function createKeys(keyboard) {
    aKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true, true); // Taste für links
    dKey = keyboard.addKey('D', true, true); // Taste für rechts
    spacebar = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); // Leertaste zum Schießen
}

// Spielerbewegung überprüfen
function checkMovement() {
    if (aKey.isDown && !dKey.isDown) {
        player.setVelocityX(-300); // Spieler bewegt sich nach links
        player.flipX = true; // Spieler-Sprite wird gespiegelt
        if (player.x < 15) {
            player.x = 615; // Spieler bewegt sich auf der anderen Seite wieder ins Bild
        }
    }
    if (dKey.isDown && !aKey.isDown) {
        player.setVelocityX(300); // Spieler bewegt sich nach rechts
        player.flipX = false; // Spieler-Sprite wird nicht gespiegelt
        if (player.x > 615) {
            player.x = 15; // Spieler bewegt sich auf der anderen Seite wieder ins Bild
        }
    }
    if (aKey.isUp && dKey.isUp) {
        player.setVelocityX(0); // Spieler bleibt stehen
    }
}

// Schießen überprüfen
function checkShoot() {
    if (spacebar.isDown && !ball.active) {
        ball.active = true; // Geschoss wird aktiviert
        ball.x = player.x; // Geschoss startet von der Spielerposition
        ball.y = player.y - 40; // Geschoss wird etwas oberhalb des Spielers platziert
        ball.setVelocityY(-400); // Geschoss wird nach oben geschossen
        player.anims.play('shoot', true); // Schussanimation abspielen
    }
    if (ball.active && ball.y < 0) {
        ball.active = false; // Geschoss wird deaktiviert, wenn es aus dem Bild verschwindet
    }
}

// Ball checken / ausblenden, wenn er den Bildschirm nach oben verlässt
function checkBall() {
	if (ball.active && ball.startPosition - ball.y > config.height) {
		ball.disableBody(true, true)
	}
}

// Plattformen neu positionieren
function refactorePlatforms() {
    platforms.children.iterate(function (platform) {
        if (platform.y > player.y + 400) {
            platform.y = player.y - Phaser.Math.Between(600, 1000); // Plattform wird weiter oben neu positioniert
            platform.x = Phaser.Math.Between(0, 640); // Plattform wird zufällig horizontal positioniert
            platform.refreshBody(); // Physik-Body aktualisieren
        }
    });
}

// Feinde neu positionieren
function refactoreEnemies() {
    enemies.children.iterate(function (enemy) {
        if (enemy.y > player.y + 400) {
            enemy.x = Phaser.Math.Between(0, 640); // Feind wird zufällig horizontal positioniert
            enemy.y = Phaser.Math.Between(player.y - 950, player.y - 1350); // Feind wird vertikal neu positioniert
            enemy.setActive(true); // Feind wird aktiviert
            enemy.setVisible(true); // Feind wird sichtbar
        }
    });
}

// Überprüfen, ob das Spiel vorbei ist
function checkGameOver(physics) {
    if (player.y > gameOverDistance) {
        physics.pause(); // Physik anhalten
        gameOver = true; // Spiel ist vorbei
    }
}

// Punktestand aktualisieren
function updateScore() {
    score = Math.floor(Math.abs(player.y / 100)); // Punktestand basierend auf der zurückgelegten Distanz
    scoreText.setText('Score: ' + score); // Punktestand in der Anzeige aktualisieren
}
