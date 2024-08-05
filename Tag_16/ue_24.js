'use strict';

const winnerNames = [
    'Heribert',
    'Friedlinde',
    'Tusnelda',
    'Oswine',
    'Ladislaus',
];

const withPlace_original = (winners) =>
    winners.map((winner, i) => 
        // console.log(winner,i)
         (i < 3 ? `${i + 1}${i === 0 ? 'st':''}${i === 1 ? 'nd':''}${i === 2 ? 'rd':''} place: ${winner}` : winner)
    
);

const withPlace = (winners) => {

    winners.forEach((name,i,array) => {
        
        if(i===0) array[i]="1st place: "+ name
        if(i===1) array[i]="2nd place: "+ name
        if(i===2) array[i]="3rd place: "+ name
    });

    return winners
}
    



console.log(withPlace(winnerNames));
/*
[
    '1st place: Heribert',
    '2nd place: Friedlinde',
    '3rd place: Tusnelda',
    'Oswine',
    'Ladislaus',
]
*/