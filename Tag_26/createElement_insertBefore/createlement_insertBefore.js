{
    const init = () => {
        // 1. insertBefore
        document
            .querySelector("#b1")
            .addEventListener("click", () => {
                console.log("click insertBefore")

                // li-Punkte 3,4,5,6,.. hinzufügen

                // 1. li Element erzeugen
                const liElement = document.createElement("li") // Element / TAG
                console.log(liElement)
                // 2. Inhalt und Styling unsichtbar hinzufügen
                liElement.innerHTML = (document.querySelectorAll("li").length + 1) + '<button>löschen</button>'
                liElement.style.color = "red"
                // Event-Handler für dynamisch kreiertes Element implementieren
                liElement.addEventListener("click", (e) => {

                    console.log( "click löschen")
                    e.target.parentNode.remove()
                })

                // 3. Element anfügen an <ul> als weiteres Kind
                //document.querySelector("ul").appendChild(liElement)
                let value = document.querySelector("input").value
                document.querySelector("ul").insertBefore(liElement, document.querySelectorAll('li')[value])



                document
                    .querySelectorAll("li button")
                    .forEach((button, i) => {
                        console.log("click handler installiert!")
                        button.addEventListener("click", (e) => {

                            console.log(i, "click löschen")
                            e.target.parentNode.remove()
                        })
                    })


                  

            })

        // 2. remove
        document
            .querySelector("#b2")
            .addEventListener("click", () => {
                console.log("click löschen")

                let value = document.querySelector("input").value
                document.querySelectorAll('li')[value].remove()
            })


        document
            .querySelectorAll("li button")
            .forEach((button, i) => {
                console.log("click handler installiert!")
                button.addEventListener("click", (e) => {

                    console.log(i, "click löschen")
                    e.target.parentNode.remove()
                })
            })

    } // ende init






    init()
}