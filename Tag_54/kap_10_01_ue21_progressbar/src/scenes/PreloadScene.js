import GeneralScene from "./GeneralScene.js";

class PreloadScene extends GeneralScene {
  constructor(settings) {
    super('PreloadScene',settings);
  }

  init() {
    this.cameras.main.setBackgroundColor('rgba(3, 47, 62, 0.6)');
    this.progressbar = this.add.graphics();
    this.loadingText = this.createText({
      y: this.config.center.y + this.config.textSpace,
      text: 'Loading...',
    });

    this.load.on('progress', (value) => {
      console.log('value --->', value);
      this.progressbar.clear();
      
      this.progressbar.fillStyle(0xffffff); //weiss
      this.progressbar.fillRect(this.config.center.x - 150, this.config.center.y, 300 * value, 30);
    });

    this.load.on('complete', () => {
      this.progressbar.visible = false;
      this.loadingText.visible = false;
      this.createText({
        text: 'PLAY',
        func: () => this.scene.start('MenuScene'),
      });
    });
  }

  preload() {
    this.load.image('background', 'assets/space_invader/images/space.jpeg');
    this.load.image('player', 'assets/space_invader/images/Ship.png');
    this.load.image('bullet', 'assets/space_invader/images/Bullet.png');
    this.load.image('enemyTop1', 'assets/space_invader/images/InvaderA1.png');
    this.load.image('enemyTop2', 'assets/space_invader/images/InvaderA2.png');
    this.load.image('enemyMiddle1', 'assets/space_invader/images/InvaderB1.png');
    this.load.image('enemyMiddle2', 'assets/space_invader/images/InvaderB2.png');
    this.load.image('enemyBottom1', 'assets/space_invader/images/InvaderC1.png');
    this.load.image('enemyBottom2', 'assets/space_invader/images/InvaderC2.png');
    this.load.image('block', 'assets/space_invader/images/OkBlock.png');
    this.load.image('blockHit', 'assets/space_invader/images/WeakBlock.png');

    this.load.audio('enemyBullet', 'assets/space_invader/sounds/InvaderBullet.wav')
    this.load.audio('enemyHit', 'assets/space_invader/sounds/InvaderHit.wav')
    this.load.audio('playerBullet', 'assets/space_invader/sounds/ShipBullet.wav')
    this.load.audio('playerHit', 'assets/space_invader/sounds/ShipHit.wav')
    this.load.audio('themeMusic', 'assets/space_invader/sounds/BackgroundTheme.mp3')

    // sicher ist sicher , event abwarten
    // this.load.once('complete', () => {
    //   console.log("complete loading reources")
    //   this.scene.start('MenuScene')
    // })
  }

  create() {

  }
}

export default PreloadScene;