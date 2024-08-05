const firstRow = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];

const tictactoe=[ 
     [' ','X','O'],
     [' ',' ',' '],
     ['X','O','X']
]
console.log(tictactoe.join("\n"))

tictactoe[1][1]="X"
console.log()
console.log(tictactoe.join("\n"))

const boardInStartPosition = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];
boardInStartPosition[7][3] = '♟';
console.log('boardInStartPosition --->', boardInStartPosition);
const board2string = (board) => board.map((row) => row.join('')).join('\n');

console.log(board2string(boardInStartPosition)) 