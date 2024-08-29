// ...

const historyHeadTemplate = document.getElementById('history-head-template');
const historyTailsTemplate = document.getElementById('history-tails-template');

// ...

function init() {
  deactivateTemplates();
  updateUI();
}

function deactivateTemplates() {
  historyHeadTemplate.style.display = 'none';
  historyTailsTemplate.style.display = 'none';
}

// ...