// regexExamples.js



let testStrings =[
    "kleines",
    "1kleines",
    // "Entchen",
    // "abcdefghijklmnopqrst"
]

// beliebiger text aus einer Ziffer oder Buchstabe und weiteren 3 bis 15 Buchstaben
const regex = /([a-z0-9_-])([a-z]){3,15}/g


let zuErsetzenderGesamtText=" Es war eimal ein kleines Entchen"

for (const str of testStrings) {
    console.log("\nNeues Beispiel")
    let resultMatch = str.match(regex);
    let resultSearch = str.search(regex);
    let resultMatchAll = str.matchAll(regex);
    let neuerText = zuErsetzenderGesamtText.replace(regex,"<--->")

    console.log("match(): ")
    console.log(resultMatch)
    
    console.log("search(): ")
    console.log(resultSearch)
    
    console.log("matchAll(): ")
    console.log(Array.from( resultMatchAll))

    console.log("replace(): ")
    console.log(neuerText); 
}

