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
    // this.sound.add('themeMusic', { volume: 0.3, loop: true });

    this.add.image(0, 0, 'background').setOrigin(0, 0).setScrollFactor(0);
    this.createText({
      y: this.config.center.y - this.config.textSpace,
      text: 'Start Game',
      func: () => this.scene.start('GameScene'),
    })

    this.createText({
      text: 'Highscore',
      func: () => this.scene.start('HighscoreScene'),
    })

    this.createText({
      y: this.config.center.y + this.config.textSpace,
      text: 'Exit',
      func: () => this.game.destroy(true),
    })

    this.setupMusic();
  }

  update() { }


  setupMusic() {
    if (this.backgroundMusic) {
      this.backgroundMusic.resume(); // resum dt.wiederaufnehmen
      return;
    }
    this.backgroundMusic = this.sound.add('themeMusic', { volume: 0.3, loop: true });
    this.backgroundMusic.play();
  }
}

export default MenuScene;