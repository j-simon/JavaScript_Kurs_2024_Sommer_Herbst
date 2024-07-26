'use strict';


// let url = 'https://www.123schmidt.de/shop, https://www.123schmidt.de/bewertungen';
// let ergebnis = url.replace(/123schmidt/g, 'hansonline');

// console.log(ergebnis)

/*

Im Zuge der Neustrukturierung deines Unternehmens möchtest du den derzeitigen Domainnamen 
von 1,2,3 Schmidt auf hansonline ändern. 

Die Domain lautet www.123schmidt.de. 

Dabei musst du jedoch die vollständige URL mit Protokoll und Pfad berücksichtigen. 

Die beiden zu ändernden URLs lauten: https://www.123schmidt.de/shop und https://www.123schmidt.de/bewertungen. Die neuen URLs sollen https://www.hansonline.de/shop und https://www.hansonline.de/bewertungen heißen. Da du die URLs in langen Texten mehrfach verwendest, 
hast du natürlich keine Lust, jede URL von Hand anzupassen. 
Reguläre Ausdrücke bewahren dich davor.

Nutze die dir bekannten Stringfunktionen im Zusammenhang mit regulären Ausdrücken, 
um die Domainnamen umzubenennen.

Du erhältst die URLs bereits in einer gleichnamigen Variable. 
In dieser sollen sich die aktualisierten URLs auch wieder befinden.


let url = 'https://www.123schmidt.de/shop, https://www.123schmidt.de/bewertungen';


replace - es soll ja was geaendert werden

? - vorheriger Character ist optional
:// - Pflicht
[^/\r\n] - alle ausser / \n \r Umbrüche auf Mac,Unic,Linux

Musterlösung
*/

const url = 'http://www.123schmidt.de/shop,https://www.123schmidt.de/bewertungen'

const hackedUrl = url.replace(/(https?)(:\/\/)([^/\r\n]+)/g, 'https://www.hansonline.de');
console.log(hackedUrl)


