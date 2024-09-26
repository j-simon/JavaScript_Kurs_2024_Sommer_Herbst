class PauseScene extends Phaser.Scene {
  constructor(settings) {
    super('PauseScene');
    this.config = settings;
  }

  create() {
    // kap 8.2 nach ue16
    this.cameras.main.setBackgroundColor('rgba(3, 47, 62, 0.7)');
    
    const menuButton = this.add
      .text(this.config.center.x, this.config.center.y, `Menu`, {
        fontSize: '32px',
      })
      .setOrigin()
      .setScrollFactor(0)
      .setInteractive();
    menuButton.on('pointerover', () => {
      menuButton.setStyle({ fill: 'black' });
    });
    menuButton.on('pointerout', () => {
      menuButton.setStyle({ fill: 'white' });
    });
    menuButton.on('pointerdown', () => {
      // kap.8.1 nach ue16
      this.scene.stop('GameScene');
      this.scene.start('MenuScene');
    });

    const backButton = this.add
      .text(this.config.center.x, this.config.height - this.config.textSpace, 'Back', {
        fontSize: '32px',
      })
      .setOrigin()
      .setScrollFactor(0)
      .setInteractive();
    backButton.on('pointerover', () => {
      backButton.setStyle({ fill: 'black' });
    });
    backButton.on('pointerout', () => {
      backButton.setStyle({ fill: 'white' });
    });
    backButton.on('pointerdown', () => {// kap.8.1 nach ue16
      this.scene.sleep();
      this.scene.resume('GameScene'); });
  }
}

export default PauseScene;