import GeneralScene from './GeneralScene.js';

class MenuScene extends GeneralScene {
  constructor(settings) {
    super('MenuScene', settings);
    // this.config = settings;
  }

  // preload() {
  //   this.load.image('background', 'assets/space_invader/images/space.jpeg');
  // }

  create() {
    super.create()

    this.add.image(0, 0, 'background').setOrigin(0, 0).setScrollFactor(0);

    this.createTextInteractive({
      y: this.config.center.y - this.config.textSpace,
      text: 'Start Game',
      func: () => this.scene.start('GameScene'),
    })

    this.createTextInteractive({
      text: 'Highscore',
      func: () => this.scene.start('HighscoreScene'),
    })

    this.createTextInteractive({
      y: this.config.center.y + this.config.textSpace,
      text: 'Exit',
      func: () => this.game.destroy(true),
    })
  }

  update() { }
}

export default MenuScene;