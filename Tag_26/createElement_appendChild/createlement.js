{
    const init = () => {

        document
            .querySelectorAll("button")[0]
            .addEventListener("click", () => {
                console.log("click")

                // li-Punkte 3,4,5,6,.. hinzufügen

                // 1. li Element erzeugen
                const liElement = document.createElement("li") // Element / TAG
                console.log(liElement)
                // 2. Inhalt und Styling unsichtbar hinzufügen
                liElement.innerHTML = document.querySelectorAll("li").length +1
                liElement.style.color = "red"

                // 3. Element anfügen an <ul> als weiteres Kind
                document.querySelector("ul").appendChild(liElement)
            })

    }






    init()
}