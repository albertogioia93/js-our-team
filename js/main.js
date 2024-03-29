'use strict';


const prova1 = {
    nome: 'Wayne Barret',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
};

const prova2 = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
}
const prova3 = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
}
const prova4 = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
}
const prova5 = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
}
const prova6 = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
}

// console.log(membroTeam);
document.getElementById('persona1').innerHTML = `${prova1.nome}  ${prova1.ruolo}  ${prova1.foto}`;
document.getElementById('persona2').innerHTML = `${prova2.nome}  ${prova2.ruolo}  ${prova2.foto}`;
document.getElementById('persona3').innerHTML = `${prova3.nome}  ${prova3.ruolo}  ${prova3.foto}`;
document.getElementById('persona4').innerHTML = `${prova4.nome}  ${prova4.ruolo}  ${prova4.foto}`;
document.getElementById('persona5').innerHTML = `${prova5.nome}  ${prova5.ruolo}  ${prova5.foto}`;
document.getElementById('persona6').innerHTML = `${prova6.nome}  ${prova6.ruolo}  ${prova6.foto}`;

const membroTeam = [
    {
        nome: 'Wayne Barret',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
]

// PER POTER ESSERE STAMPATI SUL BROWSER, GLI OGGETTI NELL'ARRAY DEVONO ESSERE TRASFORMATI IN STRINGHE

console.log(membroTeam);
// document.getElementById('persona1').innerHTML = `${membroTeam[0]}  ${membroTeam.ruolo}  ${membroTeam.foto}`;
// document.getElementById('persona1').innerHTML = (membroTeam);



for (let i = 0; i < membroTeam.length; i++){
    const membroCorrente = membroTeam[i];
    console.log(membroCorrente);
    // document.getElementById('team').innerHTML = `${membroCorrente.nome}  ${membroCorrente.ruolo}  ${membroCorrente.foto}`;
    for (let key in membroCorrente) {
        console.log(membroCorrente[key]);
        // document.body.onload = addElement;
        // function addElement() {
        //     const newDiv = document.createElement("div");
        //     newDiv.classList.add('membro');   
        //     document.querySelector('.membro').innerHTML = `${membroCorrente.nome}  ${membroCorrente.ruolo}  ${membroCorrente.foto}`;
        // }
        // document.getElementById('persona1').innerHTML = `${membroCorrente.nome}  ${membroCorrente.ruolo}  ${membroCorrente.foto}`;
    }
}




// ***************************************************
// ESEMPIO 1
// ***************************************************

//array
// const person1 = [
//     'Gaetano',
//     39,
//     'm',
//     false,
//     true,
//     'Frascolla'
// ];

// ***************************************************
// ESEMPIO 2
// ***************************************************

//oggetto
// const person = {
//     firstName: 'Gaetano',
//     lastName: 'Frascolla',
//     age: 39,
//     gender: 'm',
//     isMarried: false,
//     friends: ['Manuel', 'Paolo', 'Marco']
// };

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