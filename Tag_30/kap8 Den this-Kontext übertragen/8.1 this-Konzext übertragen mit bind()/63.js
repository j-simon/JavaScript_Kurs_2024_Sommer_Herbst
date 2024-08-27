class Person {
    constructor(name) {
      this.name = name;
      this.getName = this.getName.bind(this);
    }
  
    getName() {
      return this.name;
    }
  }
  
  var person = new Person('Mike');
  
  function sayHello(callback) {
    return 'Hello, ' + callback();
  }
  
  console.log(sayHello(person.getName));