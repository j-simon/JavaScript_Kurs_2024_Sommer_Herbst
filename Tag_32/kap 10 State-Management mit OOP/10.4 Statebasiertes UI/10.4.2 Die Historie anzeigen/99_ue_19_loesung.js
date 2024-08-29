// ...

function clearHistory() {
    const historyCoins = Array.from(document.querySelectorAll('#history-coin'));
    historyCoins.forEach((coin) => coin.remove());
  }
  
  
  // ...