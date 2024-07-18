'use strict';

// 1
let lieblingsEssen = prompt("Wie heisst Dein Lieblingsessen?")
let lieblingsGetraenk = prompt("Wie heisst Dein Lieblingsgetränk?")

// 2 Verkettung mit + Konkatenation
console.log(
    'Mein Lieblingsessen ist '   + lieblingsEssen +", mein Lieblingstränke ist " + lieblingsGetraenk + '.')

// 3 Verkettung mit Template String
console.log(`Mein Lieblingsessen ist ${lieblingsEssen}, mein Lieblingstränke ist ${lieblingsGetraenk}.`)

// 4 Verkettung mit + und Template String
console.log('Mein Lieblingsessen ist '    +  `${lieblingsEssen}, mein Lieblingstränke ist ${lieblingsGetraenk}.`)
