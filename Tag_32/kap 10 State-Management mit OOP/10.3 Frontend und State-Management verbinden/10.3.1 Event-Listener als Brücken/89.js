// ...

function CoinFlipManager() {
    const coinFlipButton = document.getElementById('flip-coin-button');
    const clearButton = document.getElementById('clear-button');
  
    // -------------------------------- EVENT HANDLER --------------------------------
    function handleCoinFlip(e) {
      e.preventDefault();
    }
  
    function handleClear(e) {
      e.preventDefault();
    }
  
    // ...
  
    coinFlipButton.addEventListener('click', handleCoinFlip);
    clearButton.addEventListener('click', handleClear);
  }