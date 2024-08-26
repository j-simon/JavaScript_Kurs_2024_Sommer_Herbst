class Lamp {
    constructor(lightOn) {
      this.lightOn = lightOn;
    }
  
    toggleActive() {
      this.lightOn = !this.lightOn;
    }
    logLightStatus() {
      console.log(this.lightOn);
    }
  }
  
  class Flashlight {
    constructor(lightOn, batteryFull) {
      this.lightOn = lightOn;
      this.batteryFull = batteryFull;
    }
  
    toggleActive() {
      if (!this.batteryFull) return;
      this.lightOn = !this.lightOn;
    }
    logLightStatus() {
      console.log(this.lightOn);
    }
  }
  
  function activateLamp(lamp) {
    lamp.toggleActive();
  }
  