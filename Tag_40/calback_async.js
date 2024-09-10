const array = ['jens', 'tim']
let erg = ""
array.forEach((a) => erg = erg + a)

console.log(erg)

async function test() {
    return 1
}


console.log(test() + 1)

////////////////////////////////////////////////
async function test2() {
    return 1
}

async function go() {
    wert = await test2()
    console.log(wert)
}

go()