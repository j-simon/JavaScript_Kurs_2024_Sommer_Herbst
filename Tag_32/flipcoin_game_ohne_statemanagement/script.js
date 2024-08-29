

class CoinFlipGameJens {
            
    constructor() {
        this.history = []; // das einzige Attribut / Zustand
        
        document.getElementById('flipButton').addEventListener('click', () => {
            this.flipCoin();
        });
        
        document.getElementById('clearButton').addEventListener('click', () => {
            this.clearHistory();
        });
        console.log("Konstruktor fertig !",this)
    }

    flipCoin() {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        this.updateHistory(result); // UI
        this.highlightResult(result); //UI
        return result;
    }

    updateHistory(result) {
        if (this.history.length >= 5) { // 5 ist maximal History Groesse
            this.history.shift();
        }
        this.history.push(result);
        this.displayHistory();
    }

    clearHistory() {
        this.history = []; // Datenwelt // State
        this.displayHistory(); // Optikwelt /7 UI
        this.clearHighlight(); // Optikwelt
    }

    displayHistory() {
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = ''; // Clear the list before updating

        this.history.forEach(draw => {
            const listItem = document.createElement('li');
            listItem.textContent = draw;
            historyList.appendChild(listItem);
        });
    }

    highlightResult(result) {
        this.clearHighlight();
        if (result === 'Heads') {
            document.getElementById('headsBox').classList.add('highlight');
        } else {
            document.getElementById('tailsBox').classList.add('highlight');
        }
    }

    clearHighlight() {
        document.getElementById('headsBox').classList.remove('highlight');
        document.getElementById('tailsBox').classList.remove('highlight');
    }
}

 new CoinFlipGameJens();

 1


