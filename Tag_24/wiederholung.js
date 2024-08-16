// Selektor für ein Element / DOM Knoten
const p = document.querySelector("p")
console.log('p --->', p);


const pInhalt = p.innerHTML
console.log('pInhalt --->', pInhalt);


// Selektor für mehrere Elemente / DOM Knoten
const divs = document.querySelectorAll("div")
console.log('divs --->', divs);

const divInhalte = []
divs.forEach(div => divInhalte.push(div.innerHTML))

console.log('divInhalte --->', divInhalte);

// $ und $$
const $ = (selektor) => document.querySelector(selektor)

const pVariante$ = $("p")
console.log('pVariante --->', pVariante$);

const $$ = (selektor) => Array.from(document.querySelectorAll(selektor))
// const $$ = (selektor) => document.querySelectorAll(selektor)
const divsMit$$ = $$("div")
console.log('divsMit$$ --->', divsMit$$);

const divInhalteMit$$ = []
divsMit$$.map(div => divInhalteMit$$.push(div.innerHTML))

console.log('divInhalteMit$$ --->', divInhalteMit$$);

console.log({
    vorname: "Jens"
})

// classList
const div1 = $("div")
const klassenListeDiv1 = div1.classList
console.log('klassenListeDiv1 --->', klassenListeDiv1);
klassenListeDiv1.add("rot")
klassenListeDiv1.add("rot") // sinnlos, weil es sie schon gibt
klassenListeDiv1.add("fett")
const anzahlKlassen = klassenListeDiv1.length
console.log('anzahlKlassen --->', anzahlKlassen);

klassenListeDiv1.remove("fett")
klassenListeDiv1.remove("fett")
console.log(klassenListeDiv1.item(0))

// Event- Handling
// addEventListener
div1.addEventListener(
    "click",
    (e) => console.log(e)
)

$("input").addEventListener(
    'keyup',
    (e) => console.log(e)

)
