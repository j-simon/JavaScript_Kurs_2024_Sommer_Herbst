'use strict';
{


  console.log($$('#chat_members li')); // => Array(6) [ li.admin, li, li, li, li, li ]

  // $$('#chat_members li').forEach( li  => {
  //   console.log(li.classList)
  //   // if (li.innerHTML.includes("ert"))
  //   //   li.classList.add("highlighted")    

  //     if (li.innerHTML.indexOf("ert")>0)
  //     li.classList.add("highlighted")    

  // });
  console.log($$('#chat_members li'))

const listeAufbauen = (searchTerm)=>{
  // 1. loescht erst einmal alle Klassen, so dass die Liste nicht gehighlighted ist
  $$('#chat_members li').forEach(element => {
    element.classList.remove("highlighted")
  });
  // 2. Neufilterung
  filterteListe(searchTerm)
}

  let filterteListe = (searchTerm) => $$('#chat_members li').filter((li) => {
    console.log(searchTerm)

    

    if (searchTerm==="") return

    if (li.innerHTML.indexOf(searchTerm) >= 0)
      //li.classList.toggle("highlighted")
      li.classList.add("highlighted")

  })




  //   console.log( filterteListe("ert"))
  //console.log( filterteListe("J"))



  //   if-else {}
  //   High-Order-Callback {}

  // Eventauslösung auf Tastatur-Taste nach oben

  let inputFieldSelekctor = document.querySelector("#member_search input")
  console.log(inputFieldSelekctor)

  inputFieldSelekctor.addEventListener(
    'keyup',
    // () => filterteListe("J")
    () => {
      console.log("keyup")
      console.log(inputFieldSelekctor.value)// Inhalt lesen aus dem selektierten Texteingabefeld
      listeAufbauen(inputFieldSelekctor.value)
    }
  )
}