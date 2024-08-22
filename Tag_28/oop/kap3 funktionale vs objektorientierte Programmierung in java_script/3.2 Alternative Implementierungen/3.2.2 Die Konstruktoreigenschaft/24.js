function Lamp(lightOn, watt, volt) {
    this.lightOn = lightOn;
    this.watt = watt;
    this.volt = volt;
    this.printStatistics = function () {
      console.log(`light on: ${this.lightOn}, watt: ${this.watt}, volt: ${this.volt}`);
    };
  }
  
  const lamp = new Lamp(false, 40, 230);
  
  lamp.printStatistics(); // light on: false, watt: 40, volt: 230
   
  const lamp2 = new lamp.constructor(true, 20, 230);
  
  lamp2.printStatistics(); // light on: true, watt: 20, volt: 230
  lamp.printStatistics(); // light on: false, watt: 40, volt: 230