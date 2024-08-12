'use strict';


// 1. Schreibe eine Funktion, die den Inhalt aller h1-Tags austauscht.
let elemente = document.querySelectorAll("h1")
elemente.forEach(element => element.innerHTML="lorem ipsum dolor sit Aufgabe 1. alle h1)"    
)

// 2. Schreibe eine weitere Funktion, um den Inhalt der p-Tags auszutauschen.
elemente = document.querySelectorAll("p")
elemente.forEach(element => element.innerHTML="lorem ipsum dolor sit Aufgabe 2. alle p)"    
)

// 3.Auch die Navigationspunkte sollen ausgetauscht werden.
elemente = Array.from(document.querySelectorAll("nav ul li a"))
elemente.filter(element => {

    element.innerHTML="lorem ipsum dolor sit Aufgabe 3. alle Navigationspunkte)"   
    return true
} 
)