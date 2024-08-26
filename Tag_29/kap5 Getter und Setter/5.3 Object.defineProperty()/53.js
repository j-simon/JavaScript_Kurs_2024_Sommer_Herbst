class Customer {
    #name;
    #customerID;
    constructor(name, id) {
      this.#name = name;
      this.#customerID = id;
      Object.defineProperty(this, 'name', {
        get: function () {
          return this.#name;
        },
        set: function (newName) {
          const exp = new RegExp(/\d+/);
          if (exp.test(newName)) {
            console.log('Invalid name!');
            return;
          }
          this.#name = newName;
        },
      });
    }
  }
  
  const customer1 = new Customer('Hans', 424242);
  
  console.log(customer1.name); // Hans
  
  customer1.name = 'Dave';
  
  console.log(customer1.name); // Dave
  
  customer1.name = '134Dave';
  console.log(customer1.name); // bleibt bei Dave