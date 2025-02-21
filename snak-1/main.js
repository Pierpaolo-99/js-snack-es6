/* Traccia: 

Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// take the element in the page
const rowEl = document.querySelector('.row')
const resultEl = document.getElementById('result')

// object array initialization
const bike = [
    {
        nameBike: 'Endurace 7 RAW',
        weight: '20'
    },
    {
        nameBike: 'Neuron CF 8',
        weight: '25'
    },
    {
        nameBike: 'VAN RYSEL',
        weight: '30'
    },
]

for (let i = 0; i < bike.length; i++){
    const thisBike = bike[i]

    const markup = `<div class="col">
                        <div class="card text-center">
                            <h3>${thisBike.nameBike}</h3>
                            <p>${thisBike.weight}</p>
                        </div>
                    </div>`
    rowEl.insertAdjacentHTML('beforeend', markup)
} 

// push the bike weight in array

const arrBikeWeight = []

for (let i = 0; i < bike.length; i++){
    const thisBike = bike[i]
    arrBikeWeight.push(thisBike.weight)
}

console.log(arrBikeWeight);

// find the bike max weight 

let maxWeight = 0;

for (let i = 1; i < arrBikeWeight.length; i++) {
  if (arrBikeWeight[i] > maxWeight) {
    maxWeight = arrBikeWeight[i];
  }
}
console.log(maxWeight);

// push the name bike in array 
const arrBikeName = []

for (let i = 0; i < bike.length; i++){
    const thisBike = bike[i]
    arrBikeName.push(thisBike.nameBike)
}

console.log(arrBikeName);


// stamp the bike with max weight in page

resultEl.innerHTML = `La bici con il maggior peso è ${arrBikeName[2]} con il peso di ${maxWeight} kg` 


