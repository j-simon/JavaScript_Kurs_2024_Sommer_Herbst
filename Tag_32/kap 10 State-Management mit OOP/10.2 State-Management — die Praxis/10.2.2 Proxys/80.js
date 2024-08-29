// ...

function createStore(initialState, reducer) {
    const state = new Proxy(
      { value: initialState },
      {
        set(obj, prop, value) {
          obj[prop] = value;
          // updateUI()
        },
      }
    );
  }
  
  // ...