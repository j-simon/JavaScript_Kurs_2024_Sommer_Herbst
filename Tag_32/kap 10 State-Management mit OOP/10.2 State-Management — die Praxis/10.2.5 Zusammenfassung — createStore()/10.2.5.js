window.addEventListener('DOMContentLoaded', init);

function init() {
    // console.log("init aufgerufen!")
    new CoinFlipManager();
}

function CoinFlipManager() {
    // console.log("CoinFlipManager aufgerufen!")

    // das 1. Argument ist ein Objekt mit dem Attribut history und seinem value [], ein leeres Array
    // das 2. Argument ist eine Funktion, also ein callback
    const store = createStore({ history: [] }, reducer);


    ////////////////////////////////////
    // uebung 12
    function createStore(initialState, reducer) {
        const state = new Proxy(
            { value: initialState },
            {
                set(obj, prop, value) {
                    obj[prop] = value;
                    updateUI();
                },
            }
        );

        function updateUI() {
            console.log('updateUI - New state: ', JSON.stringify(state));
        }

        console.log("state vor der Änderung", JSON.stringify(state));
        // {"value":{"history":[]}}

        state.value = 'hello world'; // jetzt den state ändern!

        console.log("state nach der Änderung", JSON.stringify(state));
        // {"value":"hello world"}

        ///////////////////////////
        function getState() {
            return { ...state.value };
        }

        // dispatch bedeutet "versenden"
        function dispatch(action, data) {
            const prevState = getState();
            //reducer s.u. macht noch nichts , er gibt undefined zurück
            state.value = reducer(prevState, action, data);
        }

        // Mal mit schauen, auch wenn das nicht gemacht werden soll,
        // die Funktionen werden später von der store Variable aufgerufen,
        // das ist das Kozept dieser Factory Funktion createStore()
        console.log("getState:", getState())
        console.log("dispatch:", dispatch())

        return {
            getState,
            dispatch,
        }
        // Langform
        // es werden die beiden Funktionen zurückgegeben!, nicht ausgeführt!
        // return {
        //     getState:getState,
        //     dispatch:dispatch,
        // }
        ////////////////////////////
    }

    /////////////////////////////////////////

    function reducer(state, action, data) {
        console.log("reducer aufgerufen!")
        switch(action) {

            case "Leermachen": 
                state.value = { history: [] }
                console.log("leermachen aktion")
                break
            case "Würfeln": 
                    state.value =
                console.log("Würfeln aktion");break
        }
            
    }
}



state.history.length > 4 ?
[...state.history.splice(-4), data] 
:
[...state.history, data]
