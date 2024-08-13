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
  console.log( $$('#chat_members li'))

  let filterteListe= (searchTerm) => $$('#chat_members li').filter( (li) => {
      
    if (li.innerHTML.includes(searchTerm))
      li.classList.toggle("highlighted")

  } )




//   console.log( filterteListe("ert"))
console.log( filterteListe("usn"))


//   if-else {}
//   High-Order-Callback {}
}