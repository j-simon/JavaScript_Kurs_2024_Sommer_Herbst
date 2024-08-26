class Customer {
  #name
    constructor(name, id) {
      this.setName(name);
      this.customerID = id;
    }
  
    setName(name) {
      const exp = new RegExp(/\d+/);
      if (exp.test(name)) {
       this.#name="Bitte Name noch eingben!"
        console.log('Invalid name!');
        return;
      }
      this.#name = name;
    }
    getName() {
      return this.#name
    }
    getCustomerID() {
      const idArray = this.customerID.toString().split('');
      return idArray.map((number, idx, arr) => (idx < arr.length - 2 ? '*' : number)).join('');
    }
  }

  // von mir hinzugefügt

  const customer1 = new Customer("Jens11 Simon",424711)
  console.log("name=",customer1.name)
  console.log("customerID=",customer1.getCustomerID())
  customer1.setName("Tim22 Schmitz")
  console.log("name=",customer1.name)


  customer1.name="Hansi122"
   console.log("name=",customer1.getName())