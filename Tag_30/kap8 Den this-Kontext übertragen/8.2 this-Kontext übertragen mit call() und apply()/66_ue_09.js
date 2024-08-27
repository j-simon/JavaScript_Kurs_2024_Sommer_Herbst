class Bell {
    constructor(sound) {
      this.sound = sound;
    }
  
    handleClick(callback) {
      console.log(`${this.sound}, ${callback()} is ringing`);
    }
  }
  
  // Class Friend
  
  bell.handleClick(friend.getName); // Ding Dong, Friend Lisa is ringing