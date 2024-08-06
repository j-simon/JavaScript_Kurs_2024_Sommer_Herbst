'use strict';

const board2string = (board) => board.map((row) => row.join('')).join('\n');

const execMove = (board, move) => {
    const originX = fieldToXPosition(originField(move));
    const originY = fieldToYPosition(originField(move));
    const targetX = fieldToXPosition(targetField(move));
    const targetY = fieldToYPosition(targetField(move));

    board[targetY][targetX] = board[originY][originX];
    board[originY][originX] = emptyBoard()[originY][originX];
    return board;
};

const boardInStartPosition = () => [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

const emptyBoard = () => [
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
];

const originField = (move) => move.substr(0, 2);
const targetField = (move) => move.substr(2);

const fieldToXPosition = (field) => letterToChessIndex(field.charAt(0));
const fieldToYPosition = (field) => numberToChessIndex(field.charAt(1));
const letterToChessIndex = (letter) => 'abcdefgh'.indexOf(letter);
const numberToChessIndex = (num) => 8 - num;
// ^ 
// |
// Funktiongssammlung

// Nutzung
// board2string - aehnlich console.log

// execMove
// boardInStartPosition

// Eingangs-Parameter
//       (   aktuellesBoard , Zug )
// Ausgangswert / return Wert , geaenderteBoard
// geaenderteBoard 
let geaenderteBoard = execMove(boardInStartPosition(), 'a1f8')

// 2. Zug
geaenderteBoard = execMove(geaenderteBoard, 'f8f7')
//console.log(board2string(geaenderteBoard))
// 3. Zug
geaenderteBoard = execMove(geaenderteBoard, 'f7f6')
// console.log(board2string(geaenderteBoard))
//console.log(board2string(boardInStartPosition()));

//console.log('\n');

//console.log(board2string(execMove(boardInStartPosition(), 'e2e4')));

// Eingangs-Parameter
//                                   (   array von Zügen )
// Ausgangswert / return Wert Board
// geaenderteBoard 
const execMovesNichtFefactored= (moves) => {
    let geaenderteBoard = boardInStartPosition()
    moves.forEach((move) => {
        geaenderteBoard = execMove(geaenderteBoard, move)

    })

    return geaenderteBoard
     
}

const execMovesForEach = (moves) => {
    let geaenderteBoard = boardInStartPosition()
    moves.forEach((move) => geaenderteBoard = execMove(geaenderteBoard, move)    )

    return geaenderteBoard
}

const execMovesChatGpt = (moves) =>  moves.reduce((board, move) => execMove(board, move), boardInStartPosition());


const execMovesAutor = (moves) => moves.reduce( execMove, boardInStartPosition());
// 0      1      2     
console.log(board2string(execMoves(['a1a8', 'a8h8', 'h8h1'])))

// reduce
//reduce((start, naechste )=>{}  )