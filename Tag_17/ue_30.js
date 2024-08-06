'use strict';

const evolutionStages = [
  // 0        1             2
  // 
  ['Pidgey', 'Pidgeotto', 'Pidgeot'],
  ['Vulpix', 'Ninetales'],
  ['Dratini', 'Dragonair', 'Dragonite']
];

const stagesFor = (pokemon) => {
  console.log("pokemon=", pokemon)

  return evolutionStages.find((pokemons) => pokemons.includes(pokemon))
}

const stagesAfter = (pokemon) =>
  stagesFor(pokemon).slice(stagesFor(pokemon).indexOf(pokemon) + 1)


const stagesBefore = (pokemon) =>
  stagesFor(pokemon).slice(0, stagesFor(pokemon).indexOf(pokemon))

console.log(stagesFor('Vulpix')); // => [ 'Vulpix', 'Ninetales' ]
console.log(stagesFor('Pidgeotto')); // =>[ Pidgey', 'Pidgeotto', 'Pidgeot']

// ['Dratini', 'Dragonair', 'Dragonite']
console.log(stagesAfter('Dratini')); // => [ 'Dragonair', 'Dragonite' ]
console.log(stagesAfter('Pidgeotto')); // => [ 'Pidgeot' ]
console.log(stagesAfter('Dragonite')); // => [  ]


console.log(stagesBefore('Pidgeot')); // => [ 'Pidgey', 'Pidgeotto' ]
console.log(stagesBefore('Dragonair')); // => [ 'Dratini' ]
