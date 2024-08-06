// let txtVeruecktesObject  = JSON.stringify(veruecktesObject) // => versenden an ein Fremdsystem
// console.log(txtVeruecktesObject)

//JSON.parse()
//'{ name:"Jens" , variable : { var1: "" ["c","e"] } }'

const object =JSON.parse('{ "name":"Jens" , "variable" : { "var1": ["c","e"] } }')
console.log(object)
console.log(object.name)