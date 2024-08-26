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


class VIPCustomer extends Customer { }