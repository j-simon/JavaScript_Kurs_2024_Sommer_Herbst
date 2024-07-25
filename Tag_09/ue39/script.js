
// 1 Deklaration
let erzeugeLink = (url, txt) => `<a href="${url}">${txt}</a>`

// 2 Aufrufe
let rueckgabe = erzeugeLink("http://1006.org", "Ab zum Webentwickler")
console.log(rueckgabe)

console.log(erzeugeLink("https://gfn.de", "Auf zu GFN"))