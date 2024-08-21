{
    const init = () => {

        const linkeListe = $("#candidates")
        const rechteListe = $("#cutest")

        console.log($("ul"))

        /*
        cloneNode-Konzept
        document.querySelector("#candidates li").addEventListener('click', () =>
            // umbewegen im DOM
            //rechteListe.appendChild(linkeListe.children[0]))

            // clone/copy
            rechteListe.appendChild(linkeListe.children[0].cloneNode(true))
        )
        */


        // li in der linken liste wurde geclickt
        const linkeListeKlickEventHandler= (e) => {
            console.log("click links")

            // checken, ob rechte Liste schon voll ist
            // maximal 3 li in der rechten Liste
            const anzahlKatzenRechts = rechteListe.querySelectorAll('li').length
            console.log('anzahlKatzenRechts --->', anzahlKatzenRechts);
            if (anzahlKatzenRechts==3) return

            // checken, ob Katze schon in rechter Liste ist
            const gefunden = Array.from(rechteListe.querySelectorAll('li')).findIndex(e.currentTarget)
            console.log('gefunden --->', gefunden);
            
            // geclicktes li Element kopieren            
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