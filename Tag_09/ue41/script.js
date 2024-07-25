'use strict'
console.log("Jens")
console.log(42)
/*
Lege für das erste Rezept — Haferflocken-Kekse —
ein Array mit den folgenden Zutaten an:

70 ml Rapsöl
1 getrenntes Ei
100 g Zucker
1 TL Backpulver

*/
if (true) { } else { }

let zutatenFuerRezept =
    [
        '70 ml Rapsöl',
        '1 getrenntes Ei',
        '100 g Zucker',
        '1 TL Backpulver'
    ]

console.log(zutatenFuerRezept.slice())
/*
2 Da in der Liste das Mehl fehlt,
 musst du 1 EL Mehl noch nachträglich ergänzen.
*/
zutatenFuerRezept.push('1 EL Mehl')
console.log(zutatenFuerRezept.slice())

/* 3 '100 g Haferflocken' an 1. Position (index 0)
*/
zutatenFuerRezept.unshift('100 g Haferflocken')
console.log(zutatenFuerRezept.slice())

/* 4 Für Kekse ist es eigentlich besser, Butter statt Öl zu verwenden. 
Tausche das Öl in der Liste dementsprechend gegen 75 g Butter aus
*/
// zutatenFuerRezept.splice(1, 1, '75 gr. Butter')
zutatenFuerRezept.splice(zutatenFuerRezept.indexOf('70 ml Rapsöl'), 1, '75 gr. Butter')
console.log(zutatenFuerRezept.slice())

/* 5
Wandle das Array nun in einen String um und speichere diesen in einer Variablen.
Dabei sollen die Zutaten als Liste ausgegeben werden.
*/
let listeText = zutatenFuerRezept.join(", ")
console.log(listeText)

/*
6
Und damit die Rezeptspielerei nicht total sinnlos war, 
bekommst du natürlich noch die Anleitung von uns dazu. 
Speichere auch diese in einer Variable und gib das komplette Rezept in der Konsole aus.
*/
let anleitung = `Zutaten:
    ${listeText}
Anleitung:

    Schmelzen Sie die Butter in einer Pfanne, geben Sie die Haferflocken dazu und vermischen Sie alles gut miteinander.

    Nehmen Sie die Masse danach vom Herd und lassen Sie sie etwas auskühlen. Nun schlagen Sie das Eiweiß mit Zucker steif und rühren Eigelb, Backpulver und Mehl unter. Vermengen Sie nun die Masse mit den abgekühlten Haferflocken.

    Setzen Sie kleine Teighäufchen auf ein Backblech. Die Häufchen sollten nicht zu groß sein, da der Teig beim Backen etwas auseinanderläuft. Im vorgeheizten Backofen bei 170 °C 15 Minuten backen.
`
console.log(anleitung)