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

// store.value={text:"neu",username:"Jens",uhrzeit:"12:00 AM"}
// store.getState()

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

    console.log("state vor der Änderung",JSON.stringify(state));
    // {"value":{"history":[]}}

    //state.value = 'hello world'; // jetzt den state ändern!
    console.log({ ...state.value })
    throw new Error("ende")
    console.log("state nach der Änderung",JSON.stringify(state));
    // {"value":"hello world"}
  }


  /////////////////////////////////////////

  function reducer(state, action, data) {
    console.log("reducer aufgerufen!")
  }
}

