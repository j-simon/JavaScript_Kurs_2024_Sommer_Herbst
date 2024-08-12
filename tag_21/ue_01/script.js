'use strict';

/*
1.) Ändere mithilfe von JS die Überschrift (h1) der HTML-Seite aus Codebeispiel 8 in Almost Famous Quotes.
*/
document.querySelector("h1").innerHTML="Almost Famous Quotes";

/*
2.) Die Seite (Codebeispiel 8) enthält ein leeres blockquote-Element. 
Öffne die HTML-Seite in Chrome. 
Gib in der Konsole eine Zeile JS-Code ein, die das Element mit folgendem Inhalt befüllt:

<p>

    I have always wished for my computer to be as easy to use as my telephone;

    my wish has come true because I can no longer figure out how to use my

    telephone.

</p>

<footer>— <cite>Bjarne Stroustrup</cite></footer>
*/
document.querySelector('blockquote').innerHTML =
    `<p>
        I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.
     </p>
     <footer>
     —  <cite>Bjarne Stroustrup</cite>
     </footer>`;
