// uebung 8 GameScene Klasse erstellen mit constructor und den preload,create und update Methoden
// uebung 9 SpaceInvaders einbauen
class GameScene extends Phaser.Scene {
    // Globale Variablen
    //physics; // Referenz auf die Physik-Engine
    player; // Spieler-Objekt
    gameOver = false; // Flag für das Spielende
    aKey
    dKey
    spacebar; // Steuerungstasten
    bullet; // Spieler-Projektil
    enemies; // Gruppe von Feinden
    gameTime = 0; // Zeit-Tracking für Feindbewegung
    enemyStep = 20; // Schrittweite für Feindbewegung
    enemyCount = 55; // Anzahl der Feinde
    walls; // Gruppe für die Blockhäuser
    missiles; // Gruppe für die feindlichen Raketen
    scoreText; // Textanzeige für den Punktestand
    score = 0; // Aktueller Punktestand
    lives = 3; // Anzahl der Leben des Spielers
    lifeText; // Textanzeige für die verbleibenden Leben
    highscore = 0
    highscoreText
    constructor(settings) {
        super('GameScene');
        this.config = settings;
    }

    // Lädt Spielressourcen vor dem Start (Bilder, Animationen)
    preload() {
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

    // kap 8.1
    init(data) {
        this.highscore = data.highscore;
        this.setupScene();
    }
    // Erstellt das Spiel-Setup, nachdem alles geladen wurde
    create() {
        

        this.add.image(0, 0, 'background').setOrigin(0, 0).setScrollFactor(0); // Hintergrund

        // kap 7.6
        this.scoreText = this.add
            .text(this.config.textSpace, this.config.textSpace, 'Score: ' + this.score, { fontSize: '32px' })
            .setOrigin(0, 0.5)
            .setScrollFactor(0);

        this.highscoreText = this.add
            .text(this.config.center.x, this.config.textSpace, `Highscore ${this.highscore}`, {
                fontSize: '32px',
            })
            .setOrigin()
            .setScrollFactor(0);


        this.lifeText = this.add
            .text(this.config.width - this.config.textSpace, this.config.textSpace, 'Lives: ' + this.lives, {
                fontSize: '32px',
            })
            .setOrigin(1, 0.5)
            .setScrollFactor(0);


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

        this.createHouses(); // Erstellt Blockhäuser als Schutz
        this.createPlayer(); // Erstellt den Spieler
        this.missiles = this.physics.add.group(); // Erstellt eine Gruppe für die Raketen
        this.createEnemies(); // Erstellt die Feinde
        this.createKeys(this.input.keyboard); // Initialisiert die Steuerungstasten
        this.createBullet(); // Erstellt das Projektil des Spielers

        // Physik-Kollisionen definieren
        this.physics.add.collider(this.player, this.enemies, () => this.pauseGame()); // Spieler trifft Feinde -> Spielpause
        this.physics.add.collider(this.enemies, this.bullet, (enemy, bullet) => this.handleHitEnemy(enemy, bullet)); // Feind wird getroffen
        this.physics.add.collider(this.bullet, this.walls, (bullet, wall) => this.handleHitWall(bullet, wall)); // Projektil trifft Block
        this.physics.add.collider(this.missiles, this.walls, (missile, wall) => this.handleHitWall(missile, wall)); // Rakete trifft Block
        this.physics.add.collider(this.player, this.missiles, (player, missile) => this.handleHitPlayer(player, missile)); // Spieler trifft Rakete

    }


    // Wird in jedem Frame aufgerufen
    update() {
        if (this.gameOver) {
            return; // Spiel beenden, falls gameOver aktiv ist
        }
        this.gameTime += 1; // Zeit für Feindbewegung hochzählen
        this.checkMovement(); // Bewegung des Spielers überprüfen
        this.checkShoot(); // Überprüfen, ob der Spieler schießt
        this.checkBullet(); // Überprüfen, ob das Projektil aktiv ist
        this.checkEnemyMovement(); // Feindbewegung steuern

        // ue_!5
        this.checkEscape();
    }
    setupScene() {
        this.scoreText = '';
        this.score = 0;
        this.lifeText = '';
        this.lives = 3;
        this.gameOver = false;
        this.enemyCount = 55;
        this.gameTime = 0;
        this.enemyStep = 20;
    }

    // Erstellt Blockhäuser (Schutz für den Spieler)
    createHouses() {
        this.walls = this.physics.add.staticGroup(); // Gruppe für statische Objekte (Blockhäuser)
        this.createHouseAt(127); // Erstellt Häuser an verschiedenen Positionen
        this.createHouseAt(419);
        this.createHouseAt(711);
        this.createHouseAt(1003);
        this.walls.children.iterate(wall => {
            wall.new = true; // Setzt neuen Status für Blöcke
        });
    }

    // Erstellt ein Blockhaus an der gegebenen Position
    createHouseAt(x, y = 600) {
        this.walls.create(x, y, 'block');
        // Weitere Blöcke für das Haus werden platziert
        this.walls.create(x + 30, y, 'block')
        this.walls.create(x, y - 20, 'block')
        this.walls.create(x + 30, y - 20, 'block')
        this.walls.create(x + 30, y - 40, 'block')

        this.walls.create(x + 60, y - 40, 'block')
        this.walls.create(x + 90, y - 40, 'block')
        this.walls.create(x + 60, y - 60, 'block')
        this.walls.create(x + 90, y - 60, 'block')

        this.walls.create(x + 120, y, 'block')
        this.walls.create(x + 150, y, 'block')
        this.walls.create(x + 120, y - 20, 'block')
        this.walls.create(x + 150, y - 20, 'block')
        this.walls.create(x + 120, y - 40, 'block')
    }

    // Erstellt den Spieler
    createPlayer() {
        this.player = this.physics.add.sprite(640, 650, 'player'); // Spieler-Raumschiff an bestimmter Position
        this.player.setDepth(10); // Spieler im Vordergrund anzeigen
    }

    // Erstellt Feinde in Gruppen und spielt Animationen ab
    createEnemies() {
        this.enemies = this.physics.add.group(); // Gruppe für Feinde
        // Erstellt Feinde (oben, Mitte, unten) und spielt deren Animationen ab
        Array(55)
            .fill()
            .forEach((_, i) => {
                let enemy
                if (i < 11) {
                    enemy = this.enemies.create(this.calculeteEnemySpawnX(i), this.calculeteEnemySpawnY(i), 'enemyTop1')
                    enemy.anims.play('moveEnemyTop')
                    return
                }
                if (i < 33) {
                    enemy = this.enemies.create(this.calculeteEnemySpawnX(i), this.calculeteEnemySpawnY(i), 'enemyMiddle1')
                    enemy.anims.play('moveEnemyMiddle')
                    return
                }
                enemy = this.enemies.create(this.calculeteEnemySpawnX(i), this.calculeteEnemySpawnY(i), 'enemyBottom1')
                enemy.anims.play('moveEnemyBottom')
            })
    }

    // Berechnet die y-Position für die Feinde basierend auf ihrem Index
    calculeteEnemySpawnY(idx) {
        return 100 + 50 * Math.floor(idx / 11);
    }

    // Berechnet die x-Position für die Feinde basierend auf ihrem Index
    calculeteEnemySpawnX(idx) {
        return 80 * (idx + 1) - 80 * 11 * Math.floor(idx / 11);
    }

    // Erstellt Steuerungstasten für den Spieler (A, D, Space)
    createKeys(keyboard) {
        this.aKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true, true);
        this.dKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D, true, true);
        this.spacebar = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //ue_15
        this.escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    // Erstellt das Projektil des Spielers
    createBullet() {
        this.bullet = this.physics.add.sprite(0, 0, 'bullet');
        this.bullet.disableBody(true, true); // Deaktiviert das Projektil, bis es abgeschossen wird
    }

    // Überprüft die Bewegung des Spielers
    checkMovement() {
        if (this.aKey.isDown && !this.dKey.isDown) {
            this.player.x > 30 ? this.player.setVelocityX(-300) : this.player.setVelocityX(0); // Bewegung nach links
        }
        if (this.dKey.isDown && !this.aKey.isDown) {
            this.player.x < 1250 ? this.player.setVelocityX(300) : this.player.setVelocityX(0); // Bewegung nach rechts
        }
        if (!this.aKey.isDown && !this.dKey.isDown) {
            this.player.setVelocityX(0); // Spieler stoppt
        }
    }

    // Überprüft, ob der Spieler schießt
    checkShoot() {
        if (this.spacebar.isDown && !this.bullet.active) {
            this.bullet.x = this.player.x; // Startposition des Projektils
            this.bullet.y = this.player.y;
            this.bullet.enableBody(true, this.bullet.x, this.bullet.y, true, true); // Projektil aktivieren
            this.bullet.setVelocityY(-500); // Projektil nach oben schießen
        }
    }

    // Überprüft, ob das Projektil den Bildschirm verlassen hat
    checkBullet() {
        if (this.bullet.active && this.bullet.y < 0) {
            this.bullet.disableBody(true, true); // Projektil deaktivieren
        }
    }

    // Steuert die Bewegung der Feinde und lässt sie Raketen abfeuern
    checkEnemyMovement() {
        if (this.gameTime % 30 !== 0) return; // Feinde bewegen sich alle 30 Frames
        if (this.gameTime % (30 * 18) === 0) {
            this.enemyStep *= -1; // Richtung der Feindbewegung ändern
            this.enemies.children.iterate(enemy => {
                enemy.y += 50; // Feinde bewegen sich nach unten
                if (enemy.y === this.player.y) this.pauseGame(); // Spiel pausieren, wenn Feinde den Spieler erreichen
            });
        }

        this.enemies.children.iterate(enemy => {
            enemy.x += this.enemyStep; // Feinde bewegen sich in die aktuelle Richtung
            if (Phaser.Math.Between(0, 70) === Phaser.Math.Between(0, 70)) {
                this.launchMissile(enemy.x, enemy.y); // Zufälliges Abfeuern von Raketen
            }
        });
    }

    // Pausiert das Spiel, wenn eine bestimmte Bedingung erfüllt ist (z.B. Spieler getroffen)
    pauseGame() {
        // this.physics.pause(); // Stoppt die Physik-Engine        
        // this.gameOver = true; // Setzt das Spiel auf "game o'ver"
        // this.enemies.children.iterate(enemy => enemy.anims.stop()); // Stoppt die Feindanimationen

        this.scene.pause();// kap 8.2 nach ueb16
        this.scene.launch('PauseScene');
    }

    // Lässt eine Rakete an einer bestimmten Position abfeuern
    launchMissile(x, y) {
        let bullet;
        this.missiles.children.iterate(missile => {
            if (missile.active) {
                bullet = missile; // Wiederverwendet ein inaktives Projektil
            }
        });
        if (bullet) {
            bullet.x = x;
            bullet.y = y;
            bullet.enableBody(true, this.bullet.x, this.bullet.y, true, true);
            bullet.setVelocityY(500); // Setzt die Rakete nach unten in Bewegung
        } else {
            let missile = this.missiles.create(x, y, 'bullet'); // Erzeugt eine neue Rakete
            missile.setVelocityY(500); // Rakete nach unten schießen
        }
    }

    // Überprüft, ob Raketen den unteren Bildschirmrand erreicht haben
    checkMissiles() {
        this.missiles.children.iterate(missile => {
            if (missile.active && missile.y > 720) {
                missile.disableBody(true, true); // Rakete deaktivieren, wenn sie aus dem Bildschirm verschwindet
            }
        });
    }

    // Handhabt den Treffer eines Feindes durch ein Projektil
    handleHitEnemy(enemy, bullet) {
        enemy.disableBody(true, true); // Feind deaktivieren
        bullet.disableBody(true, true); // Projektil deaktivieren
        this.enemyCount -= 1; // Feindanzahl verringern
        this.score += 10; // Punkte hinzufügen

        // kap.7.6
        console.log('this.highscore --->', this.highscore);
        console.log('this.score --->', this.score);
        if (this.score > this.highscore) {

            this.highscore = this.score;
            this.highscoreText.setText(`Highscore ${this.highscore}`);
        }

        this.scoreText.setText('Score: ' + this.score); // Punktestand aktualisieren
        if (this.enemyCount === 0) this.pauseGame(); // Spiel pausieren, wenn alle Feinde besiegt sind
    }

    // Handhabt den Treffer eines Blocks durch eine Rakete oder ein Projektil
    handleHitWall(bullet, wall) {
        bullet.disableBody(true, true); // Projektil deaktivieren
        if (wall.new) {
            wall.setTexture('blockHit'); // Block beschädigen
            wall.new = false;
        } else {
            wall.disableBody(true, true); // Block zerstören
        }
    }

    // Handhabt den Treffer des Spielers durch eine Rakete
    handleHitPlayer(player, missile) {
        missile.disableBody(true, true); // Rakete deaktivieren
        player.setVelocityY(0); // Spieler stoppen
        this.lifeText.setText('Lives: ' + --this.lives); // Lebensanzeige aktualisieren
        if (this.lives === 0) this.pauseGame(); // Spiel beenden, wenn der Spieler keine Leben mehr hat
    }

    // ue_15
    checkEscape() {
        // if (!this.escape.isDown) return;
        // this.scene.start('MenuScene',{highscore: this.highscore}); // 8.1
        // kap 8.2 nach ue16
        if (this.escape.isDown) this.pauseGame();
    }
}


export default GameScene










