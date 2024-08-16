'use strict';




{
  // 1. Funktion deklarieren
  const init = () => {
    $('#click_me').addEventListener('click', handleButtonClick)
  }

  const handleButtonClick = (e) => {
    console.log(e)
    //alert("Hi! geklickt")


    // if (e.altKey === false) // ohne Alt-Key
    //   e.target.innerHTML = " ein neuer Text"
    // else
    //   e.target.innerHTML = "»Cool, you found an easteregg«"


    showButtonText(
      e.target,
      e.altKey ?
        "»Cool, you found an easteregg«" :
        " ein neuer Text"
    )
  }

  const showButtonText = (target, txt) => {
    target.innerHTML = txt
  }






  const $ = (q) => document.querySelector(q);
  // const $$ = (q) => Array.from(document.querySelectorAll(q));
  const $on = (el, ev, fn) => {
    Array.isArray(el) ? el.forEach((o) => $on(o, ev, fn)) : el.addEventListener(ev, fn);
    return el;
  };

  // 2. Aufruf
  init()
}


