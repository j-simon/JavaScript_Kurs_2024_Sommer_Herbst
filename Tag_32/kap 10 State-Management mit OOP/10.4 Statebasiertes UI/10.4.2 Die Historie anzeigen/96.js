// ...

function updateUI() {
    const { history } = store.getState();
  
    if (history.length <= 0) {
      unselectCoin();
      clearHistory();
      return;
    }
  
    updateSelectedCoin(history[history.length - 1]);
    updateHistory(history);
  }
  
  // ...