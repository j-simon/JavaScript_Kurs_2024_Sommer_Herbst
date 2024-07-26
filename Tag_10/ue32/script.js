'use strict';
/* 
Schreibe einen Passwortprüfer. Der Nutzer soll aufgefordert werden, ein Passwort einzugeben. 

Das eingegebene Passwort soll dann durch einen regulären Ausdruck überprüft werden. 

Zuletzt soll der Nutzer darauf hingewiesen werden, 

ob sein Passwort den Anforderungen entspricht oder nicht. 

Das Passwort muss mindestens ein Zeichen aus jeder der folgenden Gruppen enthalten:

    Zahlen                              -  Shortcut: \d alle Ziffern [0-9]

    Kleinbuchstaben                     -  a-z

    Großbuchstaben                      -  A-Z

    Sonderzeichen: $, @, %, !           -  $@!% 

    4–20 Zeichen                        -  {4,20}

    Alle anderen Zeichen sind untersagt.

[]      :  Zeichenklasse
()      :  Gruppierung
(?= )   : look ahead, ungefähr wie wenn ... ,dann geht es weiter 
.       :  jedes Zeichen
*       :  0 oder mehrere Vorkommen 

Musterlösung :  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%])[A-Za-z\d$@!%]{4,20}$/g
*/

// let password = trim(prompt("Bitte gib ein Password ein!"))
let password ="36363495aZ%1sff"
// let password = "aA@1" 

let regex=/^((?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[$@!%])){4,20}$/g

console.log(password.match(regex) ? "ok" : "nicht ok");

