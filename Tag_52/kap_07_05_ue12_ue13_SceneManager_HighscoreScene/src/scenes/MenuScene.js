// ue 10
class MenuScene extends Phaser.Scene {

  // ue_12
  constructor(settings) {
    super('MenuScene')
    this.config = settings
  }

  preload() {
    this.load.image('background', 'assets/images/space.jpeg');
  }

  create() {
    this.add.image(0, 0, 'background').setOrigin(0, 0).setScrollFactor(0);
    // ue_12
    const startButton = this.add
      .text(this.config.center.x, this.config.center.y - this.config.textSpace, 'Start Game', {
        fontSize: '32px',
      })
      .setOrigin()
      .setScrollFactor(0)
      .setInteractive() // ue_12, clickfähig machen !!!

    // ue_12 event-handler hinzufügen
    startButton.on('pointerover', () => {
      startButton.setStyle({ fill: 'black' });
    });
    startButton.on('pointerout', () => {
      startButton.setStyle({ fill: 'white' });
    });
    startButton.on('pointerdown', () => this.scene.start('GameScene'));



    const highscoreButton = this.add
      .text(this.config.center.x, this.config.center.y, 'Highscore', {
        fontSize: '32px',
      })
      .setOrigin()
      .setScrollFactor(0)
      .setInteractive();
    highscoreButton.on('pointerover', () => {
      highscoreButton.setStyle({ fill: 'black' });
    });
    highscoreButton.on('pointerout', () => {
      highscoreButton.setStyle({ fill: 'white' });
    });

    // ue_13
    highscoreButton.on('pointerdown', () => {
      this.scene.start('HighscoreScene');
    });


    const exitButton = this.add
      .text(this.config.center.x, this.config.center.y + this.config.textSpace, 'Exit', {
        fontSize: '32px',
      })
      .setOrigin()
      .setScrollFactor(0)
      .setInteractive();
    exitButton.on('pointerover', () => {
      exitButton.setStyle({ fill: 'black' });
    });
    exitButton.on('pointerout', () => {
      exitButton.setStyle({ fill: 'white' });
    });
    exitButton.on('pointerdown', () => {
      this.game.destroy(true);
    });
  }

  update() {

  }

}

export default MenuScene