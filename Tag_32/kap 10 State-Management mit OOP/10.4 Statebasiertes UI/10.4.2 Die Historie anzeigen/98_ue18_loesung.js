// ...

function setHistory(history) {
    history.forEach((coin) => {
      const newCoin = coin === 'HEAD' ? historyHeadTemplate.cloneNode(true) : historyTailsTemplate.cloneNode(true);
      newCoin.id = 'history-coin';
      newCoin.style.display = 'flex';
      historyHeadTemplate.parentNode.appendChild(newCoin);
    });
  }
  
  // ...