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
  
    getCustomerID() {
      const idArray = this.#customerID.toString().split('');
      return idArray.map((number, idx, arr) => (idx < arr.length - 2 ? '*' : number)).join('');
    }
  }
  
  const customer1 = new Customer('Hans', 424242);
  
  console.log(customer1.getCustomerID()); // ****42
  