class Customer {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  
    setName(name) {
      const nameParts = name.split(' ');
      this.firstName = nameParts.splice(0, nameParts.length - 1).join(' ');
      this.lastName = nameParts;
    }
  }
  
  const customer1 = new Customer('Hans', 'Freitag');
  
  customer1.getName(); // Hans Freitag
  customer1.setName('Eva Marie Schmidt');
  console.log(customer1.firstName); // Eva Marie
  console.log(customer1.lastName); // Schmidt
  customer1.getName(); // Eva Marie Schmidt
  