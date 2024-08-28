const data = {
  list: ['Cheese', 'Milk', 'Butter', 'Bread'],
};


let logit1 = () => {
  // this
  console.log(this)
  // console.log(this.list.join(", "))
}

function logit2() {
  console.log(this)
  // console.log(this.list.join(", "))
}

// logit1(data)
// logit2(data)

logit1.call(data)
logit2.call(data)
// const products = [

//   { name: "Waschmaschine", preis: 999.99 },
//   { name: "Fernseher", preis: 1999.99 },

// ]