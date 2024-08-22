/*
0:  3 * 3
1:  9
2:  1 *1
3:  1
*/
// push(Rechnung)
// push(Ergebnis)
const getElementById = (id) => document.getElementById(id);

const OUTPUT = getElementById('output');
const CALCULATION = getElementById('calculation');
const history = [];
let historyIndex = null;

function calculate() {
  // Output in 0.ten, 2.ten
  history.push(OUTPUT.innerHTML);
  CALCULATION.innerHTML = OUTPUT.innerHTML + ' =';
  OUTPUT.innerHTML = eval(OUTPUT.innerHTML);
  // Ergebnis in 1.ten , 3.ten
  history.push(OUTPUT.innerHTML);

  historyIndex = history.length - 1; // 2 [0,1] 

  console.log("calculate()")
  console.log("history", history)
  console.log("historyIndex", historyIndex)
}

function addButtonEventListeners() {
  getElementById('0').addEventListener('click', () => (OUTPUT.innerHTML += '0'));
  getElementById('1').addEventListener('click', () => (OUTPUT.innerHTML += '1'));
  getElementById('2').addEventListener('click', () => (OUTPUT.innerHTML += '2'));
  getElementById('3').addEventListener('click', () => (OUTPUT.innerHTML += '3'));
  getElementById('4').addEventListener('click', () => (OUTPUT.innerHTML += '4'));
  getElementById('5').addEventListener('click', () => (OUTPUT.innerHTML += '5'));
  getElementById('6').addEventListener('click', () => (OUTPUT.innerHTML += '6'));
  getElementById('7').addEventListener('click', () => (OUTPUT.innerHTML += '7'));
  getElementById('8').addEventListener('click', () => (OUTPUT.innerHTML += '8'));
  getElementById('9').addEventListener('click', () => (OUTPUT.innerHTML += '9'));
  getElementById('÷').addEventListener('click', () => (OUTPUT.innerHTML += '/'));
  getElementById('x').addEventListener('click', () => (OUTPUT.innerHTML += '*'));
  getElementById('+').addEventListener('click', () => (OUTPUT.innerHTML += '+'));
  getElementById('-').addEventListener('click', () => (OUTPUT.innerHTML += '-'));
  getElementById('=').addEventListener('click', () => calculate());
  getElementById('AC').addEventListener('click', () => {
    OUTPUT.innerHTML = '';
    CALCULATION.innerHTML = '';
  });
}

function keyHandler(event) {
  if (event.key == '0') OUTPUT.innerHTML += '0';
  if (event.key == '1') OUTPUT.innerHTML += '1';
  if (event.key == '2') OUTPUT.innerHTML += '2';
  if (event.key == '3') OUTPUT.innerHTML += '3';
  if (event.key == '4') OUTPUT.innerHTML += '4';
  if (event.key == '5') OUTPUT.innerHTML += '5';
  if (event.key == '6') OUTPUT.innerHTML += '6';
  if (event.key == '7') OUTPUT.innerHTML += '7';
  if (event.key == '8') OUTPUT.innerHTML += '8';
  if (event.key == '9') OUTPUT.innerHTML += '9';
  if (event.key == '+') OUTPUT.innerHTML += '+';
  if (event.key == '-') OUTPUT.innerHTML += '-';
  if (event.key == '*') OUTPUT.innerHTML += '*';
  if (event.key == '/') OUTPUT.innerHTML += '/';
  if (event.key == 'Escape') {
    OUTPUT.innerHTML = '';
    CALCULATION.innerHTML = '';
  }
  if (event.key == 'Enter') calculate();
  if (event.key == 'Backspace') OUTPUT.innerHTML = OUTPUT.innerHTML.substr(0, OUTPUT.innerHTML.length - 1);


  if (event.key == 'ArrowUp') {
    console.log("Pfeil nach oben - Taste gedrückt")

    // ?? was ist das?
    /*
    In JavaScript, ?? is known as the nullish coalescing operator.
    It's used to provide a default value when dealing with null 
    or undefined. 
    The operator returns the right-hand side operand 
    when the left-hand side operand is null or undefined; 
    otherwise, it returns the left-hand side operand.
    */
    console.log("history[historyIndex - 1]", history[historyIndex - 1])

    // if (history[historyIndex - 1] === undefined || history[historyIndex - 1] === null)
    //   OUTPUT.innerHTML = ''
    OUTPUT.innerHTML = history[historyIndex - 1] ?? '';
    CALCULATION.innerHTML = history[historyIndex - 2] ?? '';
  
    historyIndex !== -1 ? historyIndex-- : null;
    console.log("historyIndex", historyIndex)

  }
  if (event.key == 'ArrowDown') {
    console.log("Pfeil nach unten - Taste gedrückt")
    OUTPUT.innerHTML = history[historyIndex + 1] ?? '';
    CALCULATION.innerHTML = history[historyIndex] ?? '';
    historyIndex !== history.length ? historyIndex++ : null;
    console.log("historyIndex", historyIndex)
  }
}

addButtonEventListeners();
document.body.addEventListener('keydown', keyHandler);
