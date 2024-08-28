class Bell {
    constructor(sound) {
      this.sound = sound;
    }
  
    handleClick(callback) {
      console.log(`${this.sound}, ${callback()} is ringing`);
    }
  }
  
  // Class Friend
  class Friend{
    constructor(name){
      this.name=name
      this.getName=this.getName.bind(this)
    }
    getName(){
      return "Friend " + this.name
    }
  }
  let friend = new Friend("Lisa")
  let bell = new Bell("Ding Dong")
  bell.handleClick(friend.getName); // Ding Dong, Fri"end Lisa is ringing