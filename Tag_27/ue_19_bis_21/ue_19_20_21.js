{
    'use strict'

    // const init = () => {}
    function init() {

        // 19
        /*
        

Verändere die Produktseite der Binär-Tasse mithilfe von JavaScript.
Du kannst wieder die JS-Konsole verwenden.

1. Füge in der Liste der Product Specifications mithilfe von JavaScript folgenden Listenpunkt hinzu:

Capacity: 11 oz.

2. Erweitere die Select-Box neben dem buy-Button mithilfe 
von JavaScript um den Eintrag: 5 items.

*/
        // 19_1
        const li = document.createElement("li")
        li.textContent = "Capacity: 11 oz."
        li.style.border = "3px solid red"
        li.style.color = "yellow"
        document.querySelector("#product_specification").appendChild(li)

        // 19_2
        const option = document.createElement("option")
        option.textContent = "5 items"
        option.style.color = "green"
        document.querySelector("#buy_form select").appendChild(option)

/*

Verändere erneut die Produktseite der Binär-Tasse mithilfe von JavaScript. Du kannst auch hier wieder die JS-Konsole verwenden.

1.Entferne die Überschrift Description mit der remove-Methode.

2.Entferne mit der remove-Methode den Text "010010000100111101010100" aus der Hauptüberschrift.
*/

// 20_1
document.querySelectorAll("h2")[0].remove()

// 20_2
document.querySelector(".article .keyword").remove()

/* 

Verändere die Produktseite der Binär-Tasse mithilfe von JavaScript.

Füge noch einmal den folgenden Listenpunkt zur Liste der Product Specifications hinzu:

Capacity: 11 oz.

Füge den Listenpunkt aber dieses Mal nicht am Ende der Liste ein, sondern vor dem Eintrag Materials: Ceramic.

*/
const liElement = document.createElement("li")
liElement.textContent = "Capacity: 11 oz."
liElement.style.border = "3px solid green"
liElement.style.color = "orange"
 document.querySelector("#product_specification").insertBefore(
    liElement  , 
    document.querySelectorAll("#product_specification li")[4] )

}


init()
}




