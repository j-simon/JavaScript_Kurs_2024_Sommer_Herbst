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
    getCustomerID() {
        const idArray = this.customerID.toString().split('');
        return idArray.map((number, idx, arr) => (idx < arr.length - 2 ? '*' : number)).join('');
    }
}

// die Klasse oben ist von mir hinzugefuegt worden, damit das funktioniert!

class VIPCustomer extends Customer {
    constructor(name, id,a) {
        // Kind-Klasse(sub-Klasse) Eltern-Klasse(super-Klasse)
         super(name, id); // wende dich an deine Klasse aus der du kopiert wurdest
         this.a=0
         
       // constructor() dr Super-Klasse umleitung
    }
}
const vipCustomer1 = new VIPCustomer('Lisa', 987654);
console.log('vipCustomer1 --->', vipCustomer1);

const vipCustomer2 = new Customer('Jens', 12346);
console.log('vipCustomer2 --->', vipCustomer2);


// console.log(vipCustomer1.name); // Lisa
// console.log(vipCustomer1.getCustomerID()); // ****54

