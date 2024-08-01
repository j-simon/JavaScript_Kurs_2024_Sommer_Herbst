let x = () => {
    let a = 3
    return a
}

let y = () => {
    let b = 5
    return b
}
let z = (n) => console.log(n);

x();
let returnWert = y();
z(returnWert);


