'use strict';

// ////// Übung 2
// /* Tippe eine Abfrage in die Konsole, die: */
// console.log("Übung 2")

// // das h1-Element findet.
// console.log(document.querySelector('h1'))

// // das Element mit der id buy_form findet.
// console.log(document.querySelector('#buy_form'))

// // das Element mit der id product_img findet.
// console.log(document.querySelector('#product_img'))



// ////// Übung 3
// /*

// Bastle noch etwas an der Artikel-Seite weiter. 
// Schreibe deine eigenen Abfragen. 
// Benutze wieder das HTML-Dokument aus Codebeispiel 13 
// als Übungsplattform.

// Tippe eine Abfrage in die Konsole, die:
// */
// console.log("Übung 3")

// // alle li-Elemente findet.
// console.log(document.querySelectorAll('li'))

// // alle h2-Elemente findet.
// console.log(document.querySelectorAll('h2'))

// // alle Elemente mit der Klasse special findet.
// console.log(document.querySelectorAll('.special'))

// // alle li-Elemente mit der Klasse keyword findet.
// console.log(document.querySelectorAll('li.keyword'))

// // alle span-Elemente mit der Klasse special findet.
// console.log(document.querySelectorAll('span.special'))

// // alle Elemente findet, die die Klassen i UND b haben.
// console.log(document.querySelectorAll('.i.b'))


// ////// Übung 5
// /*
// Wende dich noch einmal der 010010000100111101010100-Tasse zu. Benutze geeignete Selektoren, um
// */
// console.log("Übung 5")


// // das erste li zu finden, das sich innerhalb der ul mit der id product_specification befindet.
// console.log(document.querySelector('#product_specification li'))

// // das erste span-Element zu finden, das sich innerhalb des ersten h1-Elements mit der CSS-Klasse article befindet.
// console.log(document.querySelector('h1.article span'))

// // alle Elemente mit der Klasse keyword innerhalb von p-Elementen zu finden.
// console.log(document.querySelectorAll('p .keyword'))

// // alle li-Elemente innerhalb von ul-Elementen zu finden.
// console.log(document.querySelectorAll('ul li'))

// ////// Übung 6

// /* Wende dich noch einmal der 010010000100111101010100-Tasse zu. Benutze geeignete Selektoren, um
// */
// console.log("Übung 6")

// const $$ = (qs) => Array.from(document.querySelectorAll(qs));

// // alle Bilder zu finden, deren Dateiname auf jpg endet.
// console.log($$('img[src$=jpg]'))

// // alle input - Elemente vom Typ button zu finden, die sich innerhalb von Formularen befinden.
// console.log($$('form input[type="button"]'))

// // alle Elemente mit der Klasse model zu finden, die ein Attribut data - model haben, das den Wert V7 enthält.
// console.log($$('.model[data-model*="V7"]'))

// // alle Bilder zu finden, die nicht die Klasse float_left enthalten.
// console.log($$('img:not(.float_left)'))

// // alle zweiten Listenpunkte zu finden.
// console.log($$('li:nth-child(2)'))

// // alle Listen(ul) zu finden, die unmittelbar nach einer Überschrift zweiter Ordnung(h2) folgen.
// console.log($$('h2 + ul'))
