
let tabelle = [

    ["Jens", "Simon", 42, "50668"],
    ['Tim', 'Schmitz', 32, "44329"],
    ['Tom', 'Schmitd', 31, "43439"],

]

// wie kan ich Simon darstellen?
// alle Zeiten und Spalten
console.log(tabelle)

// nur die 1.Zeile (index=0)
console.log(tabelle[0])

// von der 1.Zeile die 2.Spalte
console.log(tabelle[0][1])
// falsch console.log(tabelle[1][0])

let tabelle2 = [

    ["Jens", "Simon", 42, "50668"],
    ['Tim', 'Schmitz', 32],
    ['Tom', 'Schmitd', 31, "43439"],

]
console.log("Verarbeitung von 2dim Arrays")
console.log(tabelle2)
tabelle2.forEach((zeile) => {
    zeile.forEach((zellenWert) => console.log(zellenWert))
    console.log("--------------------")
}
)

tabelle2[0][1]="Simon-Schmitz"

console.log(tabelle2)