class Customer {
    constructor(name, id) {
        this.name = name;
        this.customerID = id;
    }

    setName(name) {
        const exp = new RegExp(/\d+/);
        if (exp.test(name)) {
            console.log('Invalid name!');
            return;
        }
        this.name = name;
    }
    getCustomerID() { // 12345 ***45
        const idArray = this.customerID.toString().split('');
        return idArray.map((number, idx, arr) => (idx < arr.length - 2 ? '*' : number)).join('');
    }
}

// die Klasse oben ist von mir hinzugefuegt worden, damit das funktioniert!

class VIPCustomer extends Customer {

    constructor(name, id,value) {
      super(name, id);
      this.value = value;
    }
  
    // Diese Methode wurde überschrieben, jetzt zeigt sie die ID wieder ohne * an!
    // ;-) 
    // überschreiben einer Methode , overriding 
    getCustomerID() { // 12345 ***45
        return this.customerID; // 12345
    }
  }

  const customer2 = new Customer('Lisa', 987654);
console.log('customer2 --->', customer2);
  
  console.log(customer2.getCustomerID()); // ***54

  const vipCustomer1 = new VIPCustomer('Lisa', 987654, 100);
console.log('vipCustomer1 --->', vipCustomer1);
  
//   console.log(vipCustomer1.getCustomerID()); // 987654
  