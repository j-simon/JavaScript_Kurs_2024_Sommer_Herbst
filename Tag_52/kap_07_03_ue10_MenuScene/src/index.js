import GameScene from './Scenes/GameScene.js';
import MenueScene from './Scenes/MenuScene.js';

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: [new MenueScene(),new GameScene()],
};

new Phaser.Game(config);