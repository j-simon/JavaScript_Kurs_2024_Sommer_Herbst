// optimieren - funktion
const handleCsv = (productList) =>
    productList.split(', ').sort()


let liste="mfjfj, dkdk, dkdk"
console.log(handleCsv(liste).join("\n"))