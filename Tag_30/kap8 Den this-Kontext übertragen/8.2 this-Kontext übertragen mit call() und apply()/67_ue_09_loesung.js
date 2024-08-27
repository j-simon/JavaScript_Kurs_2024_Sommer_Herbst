class Bell {
    constructor(sound) {
      this.sound = sound;
    }
  
    handleClick(callback) {
      console.log(`${this.sound}, ${callback()} is ringing`);
    }
  }
  
  const bell = new Bell('Ding Dong');
  
  class Friend {
    constructor(name) {
      this.name = name;
      this.getName = this.getName.bind(this);
    }
  
    getName() {
      return 'Friend ' + this.name;
    }
  }
  
  const friend = new Friend('Lisa');
  
  bell.handleClick(friend.getName); // Ding Dong, Friend Lisa is ringing
  