function lamp(lightOn, watt, volt) {
    return {
      lightOn: lightOn,
      watt: watt,
      volt: volt,
      printStatistics: function () {
        console.log(`light on: ${this.lightOn}, watt: ${this.watt}, volt: ${this.volt}`);
      },
    };
  }
  
  const lamp1 = lamp(false, 40, 230);
  
  lamp1.printStatistics(); // light on: false, watt: 40, volt: 230