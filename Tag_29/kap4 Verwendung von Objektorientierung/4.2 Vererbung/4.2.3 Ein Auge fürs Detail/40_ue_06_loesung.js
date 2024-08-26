class Engine {
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

class ElectricEngine extends Engine {
  constructor(horsepower, consumption) {
    super(horsepower, consumption);
  }

  logData() {
    console.log(
      `This engine has ${this.horsepower} horsepower and only a consumption
              of ${this.consumption} KW/h per 100 km.`
    );
  }
}

// Es fehlte die Nutzumg, also sinnloser Code ! :-(

// Im Video wurde das nachgeholt
const engine = new Engine(150, 8)

const electricEngine = new ElectricEngine(200, 15)

const allEngines = [engine, electricEngine]

allEngines.forEach(engine => engine.logData())
