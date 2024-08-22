const lamp = {
  lightOn: false,
  watt: 40,
  volt: 230,
  printStatistics: function () {
    console.log(`light on: ${this.lightOn}, watt: ${this.watt}, volt: ${this.volt}`);
  },
};
lamp.printStatistics(); // light on: false, watt: 40, volt: 230

const lamp2 = Object.create(lamp);

lamp2.printStatistics(); // light on: false, watt: 40, volt: 230


// const lamp3 = lamp; // warum nicht so? ist doch viel einfacher ??
// lamp3.printStatistics(); // light on: false, watt: 40, volt: 230

// lamp.watt=0
// // jetzt wird es spannend!
// lamp3.printStatistics(); // light on: false, watt: 0, volt: 230
