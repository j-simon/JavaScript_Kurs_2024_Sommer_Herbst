// ...

function reducer(state, action, data) {
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

// ...