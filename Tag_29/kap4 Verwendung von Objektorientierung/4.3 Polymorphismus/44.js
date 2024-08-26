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
  
  class Flashlight extends Lamp {
    constructor(lightOn, batteryFull) {
      super(lightOn);
      this.batteryFull = batteryFull;
    }
  
    toggleActive() {
      if (!this.batteryFull) return;
      this.lightOn = !this.lightOn;
    }
  }
  
  function activateLamp(lamp) {
    lamp.toggleActive();
  }
  
  const lamp = new Lamp(false);
  const flashlight = new Flashlight(false, true);
  
  lamp.logLightStatus(); // false
  flashlight.logLightStatus(); // false
  
  activateLamp(lamp);
  lamp.logLightStatus(); // true
  flashlight.logLightStatus(); // false
  
  activateLamp(flashlight);
  lamp.logLightStatus(); // true
  flashlight.logLightStatus(); // true