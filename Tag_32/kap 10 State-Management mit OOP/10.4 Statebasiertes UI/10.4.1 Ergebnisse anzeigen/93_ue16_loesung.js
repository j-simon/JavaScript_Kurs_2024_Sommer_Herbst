// ...

function updateUI() {
    const { history } = store.getState();
  
    if (history.length <= 0) {
      unselectCoin();
      return;
    }
  
    updateSelectedCoin(history[history.length - 1]);
  }
  
  function updateSelectedCoin(selectedCoin) {
    unselectCoin();
    selectCoin(selectedCoin);
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
  
  
  // ...