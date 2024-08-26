class Customer {
   #name
    constructor(name, id) {
      this.#name = name;
      this.customerID = id;
    }
    // get set
    // holen setzen
    // lesen schreiben
    // get Name
    // set Name

    // get customeID
    // set customerID

    setName(name){
      if(name.length!==0)
        this.#name=name
      else
      console.log("\n!!!!!!!!! -->  Du hast den Name vergessen  -------\n")
      
    }

    getName(){

      return "**" + this.#name.substr(2)
    }
  }
  
  const customer1 = new Customer('Hans', 424242);
  customer1.setName("Jens")
console.log('customer1 --->', customer1);

customer1.setName("")
console.log('customer1 --->', customer1);


console.log('customer1 --->', customer1.getName());
console.log('customer1 --->', customer1.name);
  // 
  let vorname;

  vorname="Jens" // Wert set schreib Vorgang, 
  console.log(vorname) // Wert get lesen