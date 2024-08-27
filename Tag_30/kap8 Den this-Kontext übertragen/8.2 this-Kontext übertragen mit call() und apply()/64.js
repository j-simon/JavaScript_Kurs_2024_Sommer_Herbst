function print(...args) {
    console.log(this.greetings + args);
  }
  
  print.call({ greetings: 'Hey hey hey, ' }, 'Simon', 42); // Hey hey hey, Simon,42
  