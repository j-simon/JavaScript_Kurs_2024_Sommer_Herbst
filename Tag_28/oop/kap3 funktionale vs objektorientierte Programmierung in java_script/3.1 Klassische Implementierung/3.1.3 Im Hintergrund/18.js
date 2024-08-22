function Lamp(status) {
  this.lightOn = status;
}

Lamp.prototype.toggleActive = function () {
  this.lightOn = !this.lightOn;
};

Lamp.prototype.logLightStatus = function () {
  console.log(this.lightOn);
};

const lamp = new Lamp(false);

console.log(Lamp.prototype === lamp.__proto__); // true