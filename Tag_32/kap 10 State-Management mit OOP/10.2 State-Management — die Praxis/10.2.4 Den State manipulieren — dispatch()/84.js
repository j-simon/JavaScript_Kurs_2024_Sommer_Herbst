// ...

// dispatch bedeutet "versenden"
function dispatch(action, data) {
    const prevState = getState();
    state.value = reducer(prevState, action, data);
  }
  
  return {
    getState,
    dispatch,
  };
  
  
  // ...