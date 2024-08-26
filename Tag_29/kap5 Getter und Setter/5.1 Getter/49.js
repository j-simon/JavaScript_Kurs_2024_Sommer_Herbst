class Customer {
    #name;
    #customerID;
    constructor(name, id) {
      this.#name = name;
      this.#customerID = id;
    }
  
    setName(newName) {
      const exp = new RegExp(/\d+/);
      if (exp.test(newName)) {
        console.log('Invalid name!');
        return;
      }
      this.#name = newName;
    }
  }
  
  const customer1 = new Customer('Hans', 424242);
  
  customer1.setName(131415); // Invalid name!