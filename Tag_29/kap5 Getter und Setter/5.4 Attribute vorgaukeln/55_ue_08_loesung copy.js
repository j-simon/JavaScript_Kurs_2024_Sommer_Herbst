class Clock {

  timeStamp

  constructor(timeStamp) {
    this.timeStamp = timeStamp

    if (this.getTime === undefined || typeof this.getTime !== 'function') {
        throw new TypeError('Abstract method getTime must be declared');

      }
  }

  getTime() {
// // was soll ich denn hier schreiben, weil keiner nutzt die Clock
  }

}

class AnalogClock extends Clock {

  constructor(timeStamp) {
    super(timeStamp)
    // if (this.getTime === undefined || typeof this.getTime !== 'function') {
    //   throw new TypeError('Abstract method getTime must be declared');
    // }
  }


  // getTime() {
  //   // return this.timeStamp

  //   let linksDigits = this.timeStamp.substr(0, 2)
  //   let rechtssDigits = this.timeStamp.substr(2, 4)
  //   let tageszeit = Number(linksDigits) < 12 ? 'AM' : 'PM'


  //   return `${(linksDigits % 12 < 10) ? '0' + linksDigits % 12 : linksDigits}:${rechtssDigits} ${tageszeit}`
  // }
}

class DigitalClock extends Clock {

  constructor(timeStamp) {
    super(timeStamp)
    // if (this.getTime === undefined || typeof this.getTime !== 'function') {
    //   throw new TypeError('Abstract method getTime must be declared');
    // }
  }

 /* getTime() {
    let hilfe = this.timeStamp.split('')
    hilfe.splice(2, 0, ":")
    // console.log(hilfe)
    // console.log([ '1', '3', '0', '3' ].splice(2,0,":"))
    // console.log(hilfe.join(''))
    return "It's " + hilfe.join('') + " o'clock"
  }*/

  static tueEtwasStatisch() {
    return "ja hallo"
  }
}

////
let clock = new Clock("1303")
console.log('clock --->', clock);

let analogClock = new AnalogClock("1303") // 01:03 PM
console.log('analogClock --->', analogClock);
console.log(analogClock.getTime())

let analogClock2 = new AnalogClock("0803") // 08:03 AM
console.log('analogClock2 --->', analogClock2);
console.log(analogClock2.getTime())

let analogClock3 = new AnalogClock("1103") // 11:03 AM
console.log('analogClock3 --->', analogClock3);
console.log(analogClock3.getTime())

let digitalClock = new DigitalClock("1303")
console.log('digitalClock --->', digitalClock);
console.log(digitalClock.getTime())

//console.log(DigitalClock.tueEtwasStatisch())