class Clock {
    constructor(timeStamp) {
      this.timeStamp = timeStamp;
    }
  }
  
  class AnalogClock extends Clock {
    constructor(timeStamp) {
      super(timeStamp);
    }
  
    getTime() {
      let hours = this.timeStamp.substring(0, 2);
      const minutes = this.timeStamp.substring(2, 4);
      const daytime = Number(hours) < 12 ? 'AM' : 'PM';
      hours = hours > 12 ? `0${hours - 12}` : hours;
      return `It's ${hours}:${minutes} ${daytime}.`;
    }
  }
  
  class DigitalClock extends Clock {
    constructor(timeStamp) {
      super(timeStamp);
    }
  
    getTime() {
      let time = this.timeStamp.split('');
      time.splice(2, 0, ':');
      return `It's ${time.join('')} o'clock.`;
    }
  }
  
  const analog = new AnalogClock('1524');
  console.log(analog.getTime()); // It's 03:24 PM.
  
  const digital = new DigitalClock('1524');
  console.log(digital.getTime()); // It's 15:24 o'clock.