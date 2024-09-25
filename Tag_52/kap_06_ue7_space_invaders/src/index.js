const config = {
    // Konfigurationsobjekt für das Phaser-Spiel
    type: Phaser.AUTO, // Automatische Wahl zwischen WebGL oder Canvas
    width: 1280, // Breite des Spielbereichs in Pixeln
    height: 720, // Höhe des Spielbereichs in Pixeln
    physics: {
        default: 'arcade', // Arcade-Physik wird verwendet
        arcade: {
            debug: true, // Physik-Debugging aktivieren
        },
    },
    scene: {
        preload: preload, // preload-Funktion wird zu Beginn aufgerufen
        create: create,   // create-Funktion erstellt das Spiel-Setup
        update: update,   // update-Funktion wird in jedem Frame aufgerufen
    },
};

// Startet das Phaser-Spiel mit der oben definierten Konfiguration
const game = new Phaser.Game(config);

// Globale Variablen
let physics; // Referenz auf die Physik-Engine

let player; // Spieler-Objekt
let gameOver = false; // Flag für das Spielende
let aKey, dKey, spacebar; // Steuerungstasten
let bullet; // Spieler-Projektil
let enemies; // Gruppe von Feinden
let time = 0; // Zeit-Tracking für Feindbewegung
let enemyStep = 20; // Schrittweite für Feindbewegung
let enemyCount = 55; // Anzahl der Feinde
let walls; // Gruppe für die Blockhäuser
let missiles; // Gruppe für die feindlichen Raketen
let scoreText; // Textanzeige für den Punktestand
let score = 0; // Aktueller Punktestand
let lives = 3; // Anzahl der Leben des Spielers
let lifeText; // Textanzeige für die verbleibenden Leben

// Lädt Spielressourcen vor dem Start (Bilder, Animationen)
function preload() {
    this.load.image('background', 'assets/images/space.jpeg'); // Hintergrundbild
    this.load.image('player', 'assets/images/Ship.png'); // Spieler-Raumschiff
    this.load.image('bullet', 'assets/images/Bullet.png'); // Projektil
    this.load.image('enemyTop1', 'assets/images/InvaderA1.png'); // Feinde (oben)
    this.load.image('enemyTop2', 'assets/images/InvaderA2.png');
    this.load.image('enemyMiddle1', 'assets/images/InvaderB1.png'); // Feinde (Mitte)
    this.load.image('enemyMiddle2', 'assets/images/InvaderB2.png');
    this.load.image('enemyBottom1', 'assets/images/InvaderC1.png'); // Feinde (unten)
    this.load.image('enemyBottom2', 'assets/images/InvaderC2.png');
    this.load.image('block', 'assets/images/OkBlock.png'); // Block für Häuser
    this.load.image('blockHit', 'assets/images/WeakBlock.png'); // Beschädigter Block
}

// Erstellt das Spiel-Setup, nachdem alles geladen wurde
function create() {
    setPhysics(this.physics); // Initialisierung der Physik-Engine
    this.add.image(0, 0, 'background').setOrigin(0, 0).setScrollFactor(0); // Hintergrund
    scoreText = this.add.text(16, 16, 'Score: ' + score, { fontSize: '32px' }).setScrollFactor(0); // Punktanzeige
    lifeText = this.add.text(1100, 16, 'Lives: ' + lives, { fontSize: '32px' }).setScrollFactor(0); // Lebensanzeige

    // Animationen für die Feinde
    this.anims.create({
        key: 'moveEnemyTop',
        frames: [{ key: 'enemyTop2' }, { key: 'enemyTop1' }],
        frameRate: 2, // Frame-Rate der Animation
        repeat: -1, // Endlosschleife
    });

    this.anims.create({
        key: 'moveEnemyMiddle',
        frames: [{ key: 'enemyMiddle2' }, { key: 'enemyMiddle1' }],
        frameRate: 2,
        repeat: -1,
    });

    this.anims.create({
        key: 'moveEnemyBottom',
        frames: [{ key: 'enemyBottom2' }, { key: 'enemyBottom1' }],
        frameRate: 2,
        repeat: -1,
    });

    createHouses(); // Erstellt Blockhäuser als Schutz
    createPlayer(); // Erstellt den Spieler
    missiles = this.physics.add.group(); // Erstellt eine Gruppe für die Raketen
    createEnemies(); // Erstellt die Feinde
    createKeys(this.input.keyboard); // Initialisiert die Steuerungstasten
    createBullet(); // Erstellt das Projektil des Spielers

    // Physik-Kollisionen definieren
    this.physics.add.collider(player, enemies, () => pauseGame()); // Spieler trifft Feinde -> Spielpause
    this.physics.add.collider(enemies, bullet, (enemy, bullet) => handleHitEnemy(enemy, bullet)); // Feind wird getroffen
    this.physics.add.collider(bullet, walls, (bullet, wall) => handleHitWall(bullet, wall)); // Projektil trifft Block
    this.physics.add.collider(missiles, walls, (missile, wall) => handleHitWall(missile, wall)); // Rakete trifft Block
    this.physics.add.collider(player, missiles, (player, missile) => handleHitPlayer(player, missile)); // Spieler trifft Rakete
}

// Wird in jedem Frame aufgerufen
function update() {
    if (gameOver) {
        return; // Spiel beenden, falls gameOver aktiv ist
    }
    time += 1; // Zeit für Feindbewegung hochzählen
    checkMovement(); // Bewegung des Spielers überprüfen
    checkShoot(); // Überprüfen, ob der Spieler schießt
    checkBullet(); // Überprüfen, ob das Projektil aktiv ist
    checkEnemyMovement(); // Feindbewegung steuern
}

// Speichert die Physik-Engine in der globalen Variable 'physics'
function setPhysics(physic) {
    physics = physic;
}

// Erstellt Blockhäuser (Schutz für den Spieler)
function createHouses() {
    walls = physics.add.staticGroup(); // Gruppe für statische Objekte (Blockhäuser)
    createHouseAt(127); // Erstellt Häuser an verschiedenen Positionen
    createHouseAt(419);
    createHouseAt(711);
    createHouseAt(1003);
    walls.children.iterate(wall => {
        wall.new = true; // Setzt neuen Status für Blöcke
    });
}

// Erstellt ein Blockhaus an der gegebenen Position
function createHouseAt(x, y = 600) {
    walls.create(x, y, 'block');
    // Weitere Blöcke für das Haus werden platziert
    walls.create(x + 30, y, 'block')
	walls.create(x, y - 20, 'block')
	walls.create(x + 30, y - 20, 'block')
	walls.create(x + 30, y - 40, 'block')

	walls.create(x + 60, y - 40, 'block')
	walls.create(x + 90, y - 40, 'block')
	walls.create(x + 60, y - 60, 'block')
	walls.create(x + 90, y - 60, 'block')

	walls.create(x + 120, y, 'block')
	walls.create(x + 150, y, 'block')
	walls.create(x + 120, y - 20, 'block')
	walls.create(x + 150, y - 20, 'block')
	walls.create(x + 120, y - 40, 'block')
}

// Erstellt den Spieler
function createPlayer() {
    player = physics.add.sprite(640, 650, 'player'); // Spieler-Raumschiff an bestimmter Position
    player.setDepth(10); // Spieler im Vordergrund anzeigen
}

// Erstellt Feinde in Gruppen und spielt Animationen ab
function createEnemies() {
    enemies = physics.add.group(); // Gruppe für Feinde
    // Erstellt Feinde (oben, Mitte, unten) und spielt deren Animationen ab
    Array(55)
		.fill()
		.forEach((_, i) => {
			let enemy
			if (i < 11) {
				enemy = enemies.create(calculeteEnemySpawnX(i), calculeteEnemySpawnY(i), 'enemyTop1')
				enemy.anims.play('moveEnemyTop')
				return
			}
			if (i < 33) {
				enemy = enemies.create(calculeteEnemySpawnX(i), calculeteEnemySpawnY(i), 'enemyMiddle1')
				enemy.anims.play('moveEnemyMiddle')
				return
			}
			enemy = enemies.create(calculeteEnemySpawnX(i), calculeteEnemySpawnY(i), 'enemyBottom1')
			enemy.anims.play('moveEnemyBottom')
            
		})
}

// Berechnet die y-Position für die Feinde basierend auf ihrem Index
function calculeteEnemySpawnY(idx) {
    return 100 + 50 * Math.floor(idx / 11);
}

// Berechnet die x-Position für die Feinde basierend auf ihrem Index
function calculeteEnemySpawnX(idx) {
    return 80 * (idx + 1) - 80 * 11 * Math.floor(idx / 11);
}

// Erstellt Steuerungstasten für den Spieler (A, D, Space)
function createKeys(keyboard) {
    aKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true, true);
    dKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D, true, true);
    spacebar = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

// Erstellt das Projektil des Spielers
function createBullet() {
    bullet = physics.add.sprite(0, 0, 'bullet');
    bullet.disableBody(true, true); // Deaktiviert das Projektil, bis es abgeschossen wird
}

// Überprüft die Bewegung des Spielers
function checkMovement() {
    if (aKey.isDown && !dKey.isDown) {
        player.x > 30 ? player.setVelocityX(-300) : player.setVelocityX(0); // Bewegung nach links
    }
    if (dKey.isDown && !aKey.isDown) {
        player.x < 1250 ? player.setVelocityX(300) : player.setVelocityX(0); // Bewegung nach rechts
    }
    if (!aKey.isDown && !dKey.isDown) {
        player.setVelocityX(0); // Spieler stoppt
    }
}

// Überprüft, ob der Spieler schießt
function checkShoot() {
    if (spacebar.isDown && !bullet.active) {
        bullet.x = player.x; // Startposition des Projektils
        bullet.y = player.y;
        bullet.enableBody(true, bullet.x, bullet.y, true, true); // Projektil aktivieren
        bullet.setVelocityY(-500); // Projektil nach oben schießen
    }
}

// Überprüft, ob das Projektil den Bildschirm verlassen hat
function checkBullet() {
    if (bullet.active && bullet.y < 0) {
        bullet.disableBody(true, true); // Projektil deaktivieren
    }
}

// Steuert die Bewegung der Feinde und lässt sie Raketen abfeuern
function checkEnemyMovement() {
    if (time % 30 !== 0) return; // Feinde bewegen sich alle 30 Frames
    if (time % (30 * 18) === 0) {
        enemyStep *= -1; // Richtung der Feindbewegung ändern
        enemies.children.iterate(enemy => {
            enemy.y += 50; // Feinde bewegen sich nach unten
            if (enemy.y === player.y) pauseGame(); // Spiel pausieren, wenn Feinde den Spieler erreichen
        });
    }

    enemies.children.iterate(enemy => {
        enemy.x += enemyStep; // Feinde bewegen sich in die aktuelle Richtung
        if (Phaser.Math.Between(0, 70) === Phaser.Math.Between(0, 70)) {
            launchMissile(enemy.x, enemy.y); // Zufälliges Abfeuern von Raketen
        }
    });
}

// Pausiert das Spiel, wenn eine bestimmte Bedingung erfüllt ist (z.B. Spieler getroffen)
function pauseGame() {
    physics.pause(); // Stoppt die Physik-Engine
    gameOver = true; // Setzt das Spiel auf "game over"
    enemies.children.iterate(enemy => enemy.anims.stop()); // Stoppt die Feindanimationen
}

// Lässt eine Rakete an einer bestimmten Position abfeuern
function launchMissile(x, y) {
    let bullet;
    missiles.children.iterate(missile => {
        if (!missile.active) {
            bullet = missile; // Wiederverwendet ein inaktives Projektil
        }
    });
    if (bullet) {
        bullet.x = x;
        bullet.y = y;
        bullet.enableBody(true, bullet.x, bullet.y, true, true);
        bullet.setVelocityY(500); // Setzt die Rakete nach unten in Bewegung
    } else {
        let missile = missiles.create(x, y, 'bullet'); // Erzeugt eine neue Rakete
        missile.setVelocityY(500); // Rakete nach unten schießen
    }
}

// Überprüft, ob Raketen den unteren Bildschirmrand erreicht haben
function checkMissiles() {
    missiles.children.iterate(missile => {
        if (missile.active && missile.y > 720) {
            missile.disableBody(true, true); // Rakete deaktivieren, wenn sie aus dem Bildschirm verschwindet
        }
    });
}

// Handhabt den Treffer eines Feindes durch ein Projektil
function handleHitEnemy(enemy, bullet) {
    enemy.disableBody(true, true); // Feind deaktivieren
    bullet.disableBody(true, true); // Projektil deaktivieren
    enemyCount -= 1; // Feindanzahl verringern
    score += 10; // Punkte hinzufügen
    scoreText.setText('Score: ' + score); // Punktestand aktualisieren
    if (enemyCount === 0) pauseGame(); // Spiel pausieren, wenn alle Feinde besiegt sind
}

// Handhabt den Treffer eines Blocks durch eine Rakete oder ein Projektil
function handleHitWall(bullet, wall) {
    bullet.disableBody(true, true); // Projektil deaktivieren
    if (wall.new) {
        wall.setTexture('blockHit'); // Block beschädigen
        wall.new = false;
    } else {
        wall.disableBody(true, true); // Block zerstören
    }
}

// Handhabt den Treffer des Spielers durch eine Rakete
function handleHitPlayer(player, missile) {
    missile.disableBody(true, true); // Rakete deaktivieren
    player.setVelocityY(0); // Spieler stoppen
    lifeText.setText('Lives: ' + --lives); // Lebensanzeige aktualisieren
    if (lives === 0) pauseGame(); // Spiel beenden, wenn der Spieler keine Leben mehr hat
}
