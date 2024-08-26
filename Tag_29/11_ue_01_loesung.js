class RemoteControl {
   // battery=80
    // let battery 
    constructor(battery) {
       // this.battery = battery
    }

    zeigeMitThis(){
        console.log(this)
    }

    logBatteryStatus() {
        // console.log(`${this.battery}% left`) // 
    }

    switchProgramm(channel) {
        // console.log(`new channel: ${channel}`)
    }


}
// 1. Bauplan
////////////////////////////////////////////////////////////////

// 2. Instanzierung
let fernbedienung1 = new RemoteControl(60)
console.log( fernbedienung1);

fernbedienung1.zeigeMitThis()

// let fernbedienung2=new RemoteControl(40)
// console.log( fernbedienung2);
// fernbedienung2.zeigeMitThis()

// fernbedienung1.logBatteryStatus() // 60% left
// fernbedienung1.switchProgramm(3) // new channel: 3

// let fernbedienung2=new RemoteControl(40)
// let fernbedienung3=new RemoteControl(50)
// let fernbedienung4=new RemoteControl(20)
// fernbedienung2.switchProgramm(2) // new channel: 2
// fernbedienung3.switchProgramm(5) // new channel: 5
// fernbedienung4.switchProgramm(6) // new channel: 6