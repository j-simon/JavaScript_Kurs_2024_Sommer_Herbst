function Lamp(lightOn, watt, volt) {
    this.lightOn = lightOn;
    this.watt = watt;
    this.volt = volt;
    this.printStatistics = function () {
      console.log(`light on: ${this.lightOn}, watt: ${this.watt}, volt: ${this.volt}`);
    };
  }
  
  const lamp = new Lamp();
  lamp.printStatistics(); // 'light on: undefined, watt: undefined, volt: undefined'