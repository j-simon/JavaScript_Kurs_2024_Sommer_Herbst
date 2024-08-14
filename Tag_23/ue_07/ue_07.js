

// Frage nicht nach dem Sinn, aber es besteht der Wunsch, den Text teilweise in grauer Schriftfarbe darzustellen.

// 1 Schreibe eine Funktion, die allen p-Elementen die CSS-Klasse gray zuordnet.
// document.querySelectorAll("p").forEach(p=>p.classList.add("gray"))
// // funktionoert nicht, da querSelectorAll() kein Array zurück gibt
// //  document.querySelectorAll("p").map(p=>p.classList.add("gray"))

// const $$ = (qs) => Array.from(document.querySelectorAll(qs));
// $$("p").map(p=>p.classList.add("gray"))


// 2 Eine Ausnahme soll nur der Fließtext darstellen, der den Kaufvorgang enthält. 
// Die p-Elemente mit der Klasse buy_info_text sollen dementsprechend 
// von dem Vorgang ausgeschlossen werden.
// 1 Schreibe eine Funktion, die allen p-Elementen die CSS-Klasse gray zuordnet.
console.log(document.querySelectorAll("p:not(.buy_info_text)"))
document.querySelectorAll("p:not(.buy_info_text)").forEach(p=>p.classList.add("gray"))

// 3 Weise nun allen Listenpunkten, die noch keine andere Klasse haben, 
// die Klasse gray zu.
console.log(document.querySelectorAll("li:not([class])"))
document.querySelectorAll("li:not([class])").forEach(p=>p.classList.add("gray"))