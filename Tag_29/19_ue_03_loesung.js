function RemoteControl(battery) { // constructor Funktion
  this.battery = battery;
  // kein return vom Programmieren, return ist JavaScript automatik
  // Objekt wird zurückgegeben
  this.zeigeMirEtwas = ()=>{console.log("zeigeMirEtwas()")}
}

RemoteControl.prototype.logBatteryStatus = function () {
  console.log(`${this.battery}% left`);
};

RemoteControl.prototype.switchProgramm = function (channel) {
  console.log(`new channel: ${channel}`);
};

const remoteControl =    new  RemoteControl(70);
console.log('remoteControl --->', remoteControl);
remoteControl.battery
remoteControl.zeigeMirEtwas()
console.log('remoteControl.battery --->', remoteControl.battery);

 remoteControl.logBatteryStatus(); // 70% left
 remoteControl.switchProgramm(3); // new channel: 3

// 1. Deklaration Funktion
let tueEtwas = () =>{}
// 2. Aufruf einer Funktion
let ergebnis = tueEtwas()
console.log('ergebnis --->', ergebnis);


//////////////////////////////////////////////////////////////
RemoteControl.prototype.hallo = function () {
  console.log(`hallo!:`);
};

delete RemoteControl.prototype.hallo
 remoteControl.hallo()