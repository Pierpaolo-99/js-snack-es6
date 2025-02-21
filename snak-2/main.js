/* traccia:
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// generate array of object for the football club

const footballClub = [
    {
        nameClub: 'Napoli',
        point: '0',
        penalty: '0'
    },
    {
        nameClub: 'Inter',
        point: '0',
        penalty: '0'
    },
    {
        nameClub: 'Atalanta',
        point: '0',
        penalty: '0'
    },
    {
        nameClub: 'Juve',
        point: '0',
        penalty: '0'
    },
    {
        nameClub: 'Lazio',
        point: '0',
        penalty: '0'
    },
]

console.log(footballClub[0].nameClub);
console.log(footballClub[0].point);
console.log(footballClub[0].penalty);

// generate random number with function



