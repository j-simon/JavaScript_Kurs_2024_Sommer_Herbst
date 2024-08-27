function print(...args) {
    console.log(this.greetings + args);
  }
  
  print.apply({ greetings: 'Hey hey hey, ' }, ['Simon', 42]); // Hey hey hey, Simon,42