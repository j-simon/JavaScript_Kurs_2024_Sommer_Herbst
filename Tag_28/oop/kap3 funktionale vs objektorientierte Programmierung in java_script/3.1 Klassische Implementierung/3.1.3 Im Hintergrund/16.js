function Lamp(status) {
  this.lightOn = status;
}

Lamp.prototype.toggleActive = function () {
  this.lightOn = !this.lightOn;
};

Lamp.prototype.logLightStatus = function () {
  console.log("lokaler this - Kontext",this)
  console.log(this.lightOn);
};

console.log(this) // globaler this-Kontext ist leer
const lamp = new Lamp(true)
lamp.logLightStatus()
console.log(this) // globaler this-Kontext ist leer