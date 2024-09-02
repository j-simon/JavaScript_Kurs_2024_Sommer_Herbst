const data = {
    brands: ['Audi', 'BMW', 'Mercedes', 'VW'],
};

function listBrands() {
    console.log(this.join(', '));
}

listBrands.bind(data).call();
 
