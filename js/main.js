'use strict';


const membroTeam = {
    nome: 'Wayne Barret',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
};

console.log(membroTeam);
document.getElementById('team').innerHTML = membroTeam.nome + membroTeam.ruolo + membroTeam.foto;

// ***************************************************
// ESEMPIO 1
// ***************************************************

//array
const person1 = [
    'Gaetano',
    39,
    'm',
    false,
    true,
    'Frascolla'
];

// ***************************************************
// ESEMPIO 2
// ***************************************************

//oggetto
const person = {
    firstName: 'Gaetano',
    lastName: 'Frascolla',
    age: 39,
    gender: 'm',
    isMarried: false,
    friends: ['Manuel', 'Paolo', 'Marco']
};

// ***************************************************
// ESEMPIO 3
// ***************************************************

// const nomeChiave = 'dimensione';
// const palla = {
//     colore: 'rosso',
//     nome: 'Palla Grande',
//     [nomeChiave]: 'grande'
// }

// palla.dimensione = 'piccola'; //variazione di una proprietà

// //ciclo sulle proprietà di un oggetto
// for (let key in palla) {
//     console.log(palla[key]);
// }



// ***************************************************
// ESEMPIO 4
// ***************************************************


// array di oggetti
// const classi =

//     [

//         {
//             'nome': 'Classe 1',
//             'numero_studenti': 10
//         },

//         {
//             'nome': 'Classe 2',
//             'numero_studenti': 15
//         }

//     ];

// //definizione di un nuovo oggetto
// const newClasse = {
//     'nome': 'Classe 3',
//     'numero_studenti': 20
// }

// //push array di un nuovo oggetto
// classi.push(newClasse);

// ***************************************************
// ESEMPIO 5
// ***************************************************

//oggetto con funzione
// const human = {
//     altezza: 1.5,
//     eyesColor: 'green',
//     talk() {
//         return 'parole';
//     }
// }

// human.talk();

// ***************************************************
// ESEMPIO 6
// ***************************************************

//oggetto con array
// const humanWithFriends = {
//     friends: [
//         {
//             nome: 'Marco',
//             eta: 30
//         },
//         {
//             nome: 'Luca',
//             eta: 29
//         }
//     ]
// }

// console.log(humanWithFriends);


// ***************************************************
// ESEMPIO 7
// ***************************************************

// //esempio di blog post
// const post = {
//     title: 'Nome Post',
//     data: '07/03/2023',
//     author: 'Giorgia',
//     comments: [
//         {
//             title: 'Titolo commento',
//             author: 'Bimal'
//         }
//     ],
//     like: 76,
//     isValid: true,
//     order: 100
// }


// const listPost = [
//     {
//         title: 'Nome Post',
//         data: '07/03/2023',
//         author: 'Giorgia',
//         comments: [
//             {
//                 title: 'Titolo commento',
//                 author: 'Bimal'
//             }
//         ],
//         like: 76,
//         isValid: true,
//         order: 100,
//         img: 'http://img'
//     },
//     {
//         title: 'Nome Post',
//         data: '07/03/2023',
//         author: 'Giorgia',
//         comments: [
//             {
//                 title: 'Titolo commento',
//                 author: 'Bimal'
//             }
//         ],
//         like: 76,
//         isValid: true,
//         order: 100
//     },
//     {
//         title: 'Nome Post',
//         data: '07/03/2023',
//         author: 'Giorgia',
//         comments: [
//             {
//                 title: 'Titolo commento',
//                 author: 'Bimal'
//             }
//         ],
//         like: 76,
//         isValid: true,
//         order: 100
//     }
// ]



// //ciclo su elementi array
// for (let i = 0; i < listPost.length; i++) {
//     const currentobject = listPost[i];
//     //ciclo su chiavi oggetto
//     for (let key in currentobject) {
//         console.log(key);
//         console.log(currentobject[key])
//     }
// }