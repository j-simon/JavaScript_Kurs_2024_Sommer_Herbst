function loadData(dummyData) {
    console.log("loadData-Start")
    return new Promise( (resolve,reject)=> {
    setTimeout(() => {
        console.log(`noch ein return Wert,nach 2000 ms, jetzt wird ${JSON.stringify(dummyData)} zurückgegeben, wo landet das denn?`);
         resolve(dummyData) // wo landet das denn, die Funktion hat ja schon returned?
    }, 2000)

    // console.log("loadData-Ende")
    // console.log("return Wert ist nix!")
     //reject("nix")
}

)
}


function validateData(data) {
    if (data == null) {
        return false;
    }
    return true;
}

function getValidatedData(dummyData) {
    // 1. loadData
    new Promise((resolve, reject) => {
        let data = loadData(dummyData)
        console.log("hier ist was angekommen: "+data)
        if (data == {}) resolve(data)
        else reject(data)
    }).then((data) => console.log(data))
        .catch((error) => console.log("error data =", error))

    // 2. Validierung
    // let returnwert = validateData(data)
    // console.log(returnwert)

}


// 1. Beispiel
loadData({vorname:"jens"})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})

console.log("Programm-Ende")
// getValidatedData({})

// 2. Beispiel
//   getValidatedData()