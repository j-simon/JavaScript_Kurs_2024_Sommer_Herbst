'use strict'
class Engine {
  horsepower
  consumption

  constructor(horsepower, consumption) {
    this.horsepower = horsepower;
    this.consumption = consumption;
  }

  logData() {
    console.log(
      `This engine has ${this.horsepower} horsepower and only a consumption
              of ${this.consumption} liter per 100 km.`
    );
  }
}

// hier die class ElectricEngine aufbauen
// ..
class ElectricEngine extends Engine {

  // constructor(horsepower, consumption){
  //   super(horsepower,consumption)
  // }
  // ueberscheiben overriding
  logData() {
    console.log(
      `This engine has ${this.horsepower} horsepower and only a consumption
              of ${this.consumption} kWh per 100 km.`
    );
  }
}


let engine = new Engine(300,10) // 300PS, 10l pro 100km
console.log('engine --->', engine);
engine.logData()

let electricEngine = new ElectricEngine(800,5) // 800PS, 5k kWh pro 100km
console.log('electricEngine --->', electricEngine);
electricEngine.logData()

