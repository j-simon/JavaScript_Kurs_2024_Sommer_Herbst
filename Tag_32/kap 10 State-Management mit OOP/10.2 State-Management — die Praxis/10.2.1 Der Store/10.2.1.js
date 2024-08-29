window.addEventListener('DOMContentLoaded', init);

function init() {
    console.log("init aufgerufen!")
    new CoinFlipManager();
}

function CoinFlipManager() {
    console.log("CoinFlipManager aufgerufen!")

    // das 1. Argument ist ein Objekt mit dem Attribut history und seinem value [], ein leeres Array
    // das 2. Argument ist eine Funktion, also ein callback
    const store = createStore({ history: [] }, reducer);


    function createStore(initialStore, reducer) {
        console.log("createStore aufgerufen!")
      
        //console.log("reducer wird noch nicht benutzt, also noch nicht aufgerufen!")
    }

    function reducer(state, action, data) {
        console.log("reducer aufgerufen!")
    }
}