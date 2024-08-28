// 1. Deklaration einer Funktion
function print(namen) {
    //console.log(this)
    //this={}
    
    //console.log(this)
    console.log(this.greetings +" " + namen);
    //console.log( namen);
  }
  
// 2. Funktionsaufruf
print('Simon')
print.call({greetings: "Hi"}   ,  'Simon')
  // print.apply({ greetings: 'Hey hey hey, ' }, ['Simon', 42]); // Hey hey hey, Simon,42

