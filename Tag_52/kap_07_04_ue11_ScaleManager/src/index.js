import GameScene from './Scenes/GameScene.js';
import MenueScene from './Scenes/MenuScene.js';

// ue_11
const WIDTH = 1280;
const HEIGHT = 720;

// ue_11
const settings = {
  width: WIDTH,
  height: HEIGHT,
  center: {
    x: WIDTH / 2,
    y: HEIGHT / 2,
  },
  textSpace: 50,
};


const config = {
  type: Phaser.AUTO,
  // ue_11
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: settings.width,
    height: settings.height,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: [new MenueScene(settings),new GameScene()],
};

new Phaser.Game(config);