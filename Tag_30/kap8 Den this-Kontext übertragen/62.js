class Person {
    constructor(name) {
        this.alter=42
        this.name = name;
        this.getName = this.getName.bind(this);
        this.gehtWasAuch = this.gehtWasAuch.bind(this);
    }

    getName() {
        console.log(this)
        return this.name;
    }
    gehtWasAuch(){
        return this.name + "-" +this.alter
    }
}


const person = new Person('Mike');
console.log(person.getName())

function sayHello(callback) {
    return 'Hello, ' + callback("!!");
}

const meineCallbackFunction= (x) => 'Jens' + x   
//  console.log(sayHello(meineCallbackFunction ));
console.log(sayHello(person.getName ));
console.log(sayHello(person.gehtWasAuch ));