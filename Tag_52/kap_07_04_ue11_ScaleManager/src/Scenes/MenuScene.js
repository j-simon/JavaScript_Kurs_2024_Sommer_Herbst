// ue 10
class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene')
    }

    preload() {
        this.load.image('background', 'assets/images/space.jpeg');
      }
    
      create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0).setScrollFactor(0);
        this.add
          .text(640, 360 - 50, 'Start Game', {
            fontSize: '32px',
          })
          .setOrigin()
          .setScrollFactor(0);
    
        this.add
          .text(640, 360, 'Highscore', {
            fontSize: '32px',
          })
          .setOrigin()
          .setScrollFactor(0);
    
        this.add
          .text(640, 360 + 50, 'Exit', {
            fontSize: '32px',
          })
          .setOrigin()
          .setScrollFactor(0);
      }

    update(){

    }

}

export default MenuScene