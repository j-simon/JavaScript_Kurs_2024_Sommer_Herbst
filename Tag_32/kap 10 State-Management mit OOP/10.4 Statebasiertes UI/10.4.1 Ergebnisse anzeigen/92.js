// ...

const DEFAULT_COLOR = 'text-white';
const DEFAULT_COLOR_BORDER = 'dark:border-gray-700';
const SELECTED_COLOR = 'text-blue-600';
const SELECTED_COLOR_DARK = 'dark:text-blue-500';
const SELECTED_COLOR_BORDER = 'border-blue-500';
const coinHeadImage = document.getElementById('coin-head-image');
const coinHeadText = document.getElementById('coin-head-text');
const coinTailsImage = document.getElementById('coin-tails-image');
const coinTailsText = document.getElementById('coin-tails-text');
const coinFlipButton = document.getElementById('flip-coin-button');
const clearButton = document.getElementById('clear-button');

// ...

function updateUI() {
  const { history } = store.getState();

  if (history.length <= 0) {
    unselectCoin();
    return;
  }
}

// ...

function unselectCoin() {
  coinHeadImage.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
  coinHeadImage.classList.add(DEFAULT_COLOR);
  coinHeadText.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
  coinHeadText.classList.add(DEFAULT_COLOR);
  coinHeadImage.parentElement.classList.remove(SELECTED_COLOR_BORDER);
  coinHeadImage.parentElement.classList.add(DEFAULT_COLOR_BORDER);
  coinTailsImage.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
  coinTailsImage.classList.add(DEFAULT_COLOR);
  coinTailsText.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK);
  coinTailsText.classList.add(DEFAULT_COLOR);
  coinTailsText.parentElement.classList.remove(SELECTED_COLOR_BORDER);
  coinTailsText.parentElement.classList.add(DEFAULT_COLOR_BORDER);
}

// ...