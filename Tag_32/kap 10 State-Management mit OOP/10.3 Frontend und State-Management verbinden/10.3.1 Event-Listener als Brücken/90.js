// ...

function handleCoinFlip(e) {
  e.preventDefault();
  e.target.blur();

  const coinFlipResult = flipCoin();
  store.dispatch('COIN_FLIP', coinFlipResult);
}

// -------------------------------- FUNCTIONS --------------------------------
function flipCoin() {
  return Math.random() < 0.5 ? 'HEAD' : 'TAILS';
}


// ...