{
    const init = () => {

        console.log("init")
        const rechteListe = $("#cutest")
        const linkeListe = $("#candidates")

        // // cloneNode-Konzept
        // document.querySelector("#candidates li").addEventListener('click', () => {
        //     console.log("click")
        //     // umbewegen im DOM
        //     //rechteListe.appendChild(linkeListe.children[0]))

        //     // umbewegen //clone/copy
        //     rechteListe.appendChild(linkeListe.children[0].cloneNode(true))
        // }
        // )



        // // li in der linken liste wurde geclickt
        const linkeListeKlickEventHandler= (e) => {
            console.log("click links")

            // checken, ob rechte Liste schon voll ist
            // maximal 3 li in der rechten Liste
            const anzahlKatzenRechts = rechteListe.querySelectorAll('li').length
            console.log('anzahlKatzenRechts --->', anzahlKatzenRechts);
            if (anzahlKatzenRechts === 3) return

            //  checken, ob Katze schon in rechter Liste ist
            console.log("e.currentTarget",e.currentTarget)
            const gefunden = Array.from(rechteListe.querySelectorAll('li'))
                            .findIndex((li) => {
                                // console.log(e.currentTarget.querySelector('span').textContent)
                                // console.log( li.querySelector('span').textContent)
                                console.log(e.currentTarget.children[0].alt)
                                console.log( li.children[0].alt)
                            
                                // Vergleich der spna-Inhalte
                                //   return  e.currentTarget.querySelector('span').textContent === li.querySelector('span').textContent 
                                // oder Vergleich der alt-Attribute
                                return  e.currentTarget.children[0].alt === li.children[0].alt 
                            })
            console.log('gefunden --->', gefunden);
            if (gefunden != -1) return // gefunden != -1, die Katze ist schon eingefügt worden

            // geklicktes li Element kopieren            
            let li=e.currentTarget.cloneNode(true)

            // auf dieses li click eventhandler fuer remove() implementieren)
            li.addEventListener("click",(e)=> e.currentTarget.remove())

            // li in rechte Liste appenden!
            rechteListe.appendChild(li)
            }

        // click eventhandler auf alle li der linken liste implementieren    
        $on($$('#candidates li'), "click",linkeListeKlickEventHandler)




    }
    init()
}