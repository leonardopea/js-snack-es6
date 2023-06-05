// SNACK 1

const array = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']


array.forEach((elem,index) => {

    console.log(`L'invitato ${elem} siede al posto ${index} del tavolo VIP`);


})



// SNACK 2

let aula = [

    {
    "id":213,
    "nome":['Marco della Rovere'],
    "voti":78
    },
    
    {
        "id":110,
        "nome":['Paola Cortellessa'],
        "voti":96
        },
        
    {
        "id":250,
        "nome":['Andrea Mantegna'],
        "voti":48
        },
        
    {
        "id":145,
        "nome":['Gaia Borromini'],
        "voti":74
        },
        
    {
        "id":196,
        "nome":['Luigi Grimaldello'],
        "voti":68
        },
        
    {
        "id":102,
        "nome":['Piero della Francesca'],
        "voti":50
        },
        
    {
        "id":120,
        "nome":['Francesco de Polenta'],
        "voti":84
        },
        


]



// 1) POPOLO LA NUOVA LISTA CON I NOMI MAIUSCOLI

let nomi_maiuscoli = [];

aula.forEach((item) => {

   nomi_maiuscoli=(`${item.nome}`)

   console.log(nomi_maiuscoli.toUpperCase())    

    


})

// 2) POPOLO LA NUOVA LISTA CON I NOMI DEGLI STUDENTI CON UN PUNTEGGIO MAGGIORE DI 70

let studenti_70 = [];

aula.forEach((item) => {

    if (item.voti > 70) {

        studenti_70=`${item.nome}`;

        console.log(studenti_70)

    }
})




// 3) POPOLO LA NUOVA LISTA CON I NOMI DEGLI STUDENTI CON UN PUNTEGGIO MAGGIORE DI 70 E UN ID SUPERIORE A 120


let studenti_120 = [];


aula.forEach((item) => {

    if (item.voti > 70 && item.id > 120) {

        studenti_120=`${item.nome}`;

        console.log(studenti_120.toUpperCase())

    }
})




// SNACK 3

const biciclette = [


    {'modello': 'biciona', 'peso' : 7},
    {'modello': 'biciclotta', 'peso' : 4},
    {'modello': 'ruotina', 'peso' : 8},
    {'modello': 'cicloswag', 'peso' : 6},
    {'modello': 'bidone', 'peso' : 9},




];


const {modello} = biciclette;
console.log(modello);






// SNACK 4


const squadre = [


    {'nome': 'Sassuolo', 'punti_fatti' : 0, 'falli subiti' : 0},
    {'nome': 'Cagliari', 'punti_fatti' : 0, 'falli subiti' : 0},
    {'nome': 'Brescia', 'punti_fatti' : 0, 'falli subiti' : 0},
    {'nome': 'Pordenone', 'punti_fatti' : 0, 'falli subiti' : 0},
    {'nome': 'Reggina', 'punti_fatti' : 0, 'falli subiti' : 0},




];

// funzione per numeri casuali

function NumeriCasuali(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}


punti_fatti = NumeriCasuali(0,100);

squadre.forEach((item) => {

    item.punti_fatti = punti_fatti;

    console.log(squadre)
})