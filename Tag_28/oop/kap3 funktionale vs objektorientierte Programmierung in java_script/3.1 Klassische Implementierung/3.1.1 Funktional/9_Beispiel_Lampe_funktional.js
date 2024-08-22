let lightOn = false;


function toggleActive() {
  lightOn = !lightOn;
}


function logLightStatus() {
  console.log(lightOn);
}


logLightStatus(); // false
toggleActive();
logLightStatus(); // true




// schlecht: globale Variable wird in einer Funktion (local scope) angeprochen

// weitere Frage : wie kann ich mehrere Lampen koordinieren?
// Die Variable und alle Funktionen duplizieren ;-) 