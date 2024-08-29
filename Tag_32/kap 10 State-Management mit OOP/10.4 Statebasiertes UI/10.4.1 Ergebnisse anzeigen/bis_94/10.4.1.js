window.addEventListener('DOMContentLoaded', init);

function init() {
    // console.log("init aufgerufen!")
    new CoinFlipManager();
}

function CoinFlipManager() {
    const DEFAULT_COLOR = 'text-white';
    const DEFAULT_COLOR_BORDER = 'dark:border-gray-700';
    const SELECTED_COLOR = 'text-blue-600';
    const SELECTED_COLOR_DARK = 'dark:text-blue-500';
    const SELECTED_COLOR_BORDER = 'border-blue-500';
    const coinHeadImage = document.getElementById('coin-head-image');
    const coinHeadText = document.getElementById('coin-head-text');
    const coinTailsImage = document.getElementById('coin-tails-image');
    const coinTailsText = document.getElementById('coin-tails-text');
    const coinFlipButton = document.getElementById('flip-coin-button');
    const clearButton = document.getElementById('clear-button');

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



        /*  console.log("state vor der Änderung", JSON.stringify(state));
          // {"value":{"history":[]}}
  
          state.value = 'hello world'; // jetzt den state ändern!
  
          console.log("state nach der Änderung", JSON.stringify(state));
          // {"value":"hello world"}
  */
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
        // console.log("getState:", getState())
        // console.log("dispatch:", dispatch())

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
        console.log('state --->', JSON.stringify(state))
        console.log('action --->', action);
        console.log('data --->', data);

        switch (action) {
            case 'COIN_FLIP':
                state = {
                    selectedCoin: data,
                    history: state.history.length > 4 ? [...state.history.splice(-4), data] : [...state.history, data],
                };

                /*
                wenn im history - Array mehr als 4 Eintraege sind,
                dann wird das 1. Element (also das älteste) gelöscht und der Neue Münzwurf angehängt
                ansonsten ist ja noch Platz und data, also der aktuelle Münzwurf gespeichert
                state.history.length > 4  ?
                       [...state.history.splice(-4), data] :
                       [...state.history, data],
        
                Beispiel mit einem Zahlen Array       
                const zahlen = [1,2,3,4,5];
                console.log(zahlen.splice(-4))
                // => Array [2, 3, 4, 5]
                
                */

                break;
            case 'CLEAR':
                state = {
                    selectedCoin: null,
                    history: [],
                };
                break;
        }
        return state;
    }

    function updateUI() {
        //console.log('updateUI - New state: ', JSON.stringify(store.getState()));

        const { history } = store.getState();

        if (history.length <= 0) {
            unselectCoin();
            return;
        }

        updateSelectedCoin(history[history.length - 1]);

    }



    // -------------------------------- EVENT HANDLER --------------------------------
    function handleCoinFlip(e) {
        console.log('handleCoinFlip aufgerufen');

        e.preventDefault();
        e.target.blur();

        const coinFlipResult = flipCoin();
        store.dispatch('COIN_FLIP', coinFlipResult);
    }

    function handleClear(e) {
        console.log('handleClear aufgerufen');

        e.preventDefault();
        e.target.blur();

        store.dispatch('CLEAR');
    }

    // -------------------------------- FUNCTIONS --------------------------------
    function flipCoin() {
        return Math.random() < 0.5 ? 'HEAD' : 'TAILS';
    }

    function unselectCoin() {
        coinHeadImage.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
        coinHeadImage.classList.add(DEFAULT_COLOR);
        coinHeadText.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
        coinHeadText.classList.add(DEFAULT_COLOR);
        coinHeadImage.parentElement.classList.remove(SELECTED_COLOR_BORDER);
        coinHeadImage.parentElement.classList.add(DEFAULT_COLOR_BORDER);
        coinTailsImage.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
        coinTailsImage.classList.add(DEFAULT_COLOR);
        coinTailsText.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
        coinTailsText.classList.add(DEFAULT_COLOR);
        coinTailsText.parentElement.classList.remove(SELECTED_COLOR_BORDER);
        coinTailsText.parentElement.classList.add(DEFAULT_COLOR_BORDER);
    }

    function selectCoin(selectedCoin) {
        const selectedCoinImage = selectedCoin === 'HEAD' ? coinHeadImage : coinTailsImage;
        const selectedCoinText = selectedCoin === 'HEAD' ? coinHeadText : coinTailsText;

        selectedCoinImage.classList.remove(DEFAULT_COLOR);
        selectedCoinText.classList.remove(DEFAULT_COLOR);
        selectedCoinImage.parentElement.classList.remove(DEFAULT_COLOR_BORDER);
        selectedCoinImage.classList.add(SELECTED_COLOR, SELECTED_COLOR_DARK);
        selectedCoinText.classList.add(SELECTED_COLOR, SELECTED_COLOR_DARK);
        selectedCoinImage.parentElement.classList.add(SELECTED_COLOR_BORDER);
    }

    function updateSelectedCoin(selectedCoin) {
        unselectCoin();
        selectCoin(selectedCoin);
    }

    coinFlipButton.addEventListener('click', handleCoinFlip);
    clearButton.addEventListener('click', handleClear);
    
    function init() {
        updateUI();
    }

    init();
    console.log("CoinFlipManager geladen!")
}
