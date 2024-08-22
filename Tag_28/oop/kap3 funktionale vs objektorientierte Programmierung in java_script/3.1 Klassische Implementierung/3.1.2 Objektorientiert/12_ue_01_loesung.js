class RemoteControl {
  constructor(battery) {
    this.battery = battery;
  }

  logBatteryStatus() {
    console.log(`${this.battery}% left`);
  }

  switchProgramm(channel) {
    console.log(`new channel: ${channel}`);
  }
}

const remoteControl = new RemoteControl(70);

remoteControl.logBatteryStatus();

remoteControl.switchProgramm(3);