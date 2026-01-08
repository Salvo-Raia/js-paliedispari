console.log("Js is ready to go!");

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. */ 
console.log("Scegli quale risultato prevedi tra pari o dispari");
userChoiceOddEven = prompt("Pari o dispari?", "Pari");
console.log("Bene, è il momento di scegliere un numero tra 1 e 5");
let userChoiceNumber;

let i = 0;
for (; i === 0; ) {
    userChoiceNumber = parseInt(prompt("Scegli un numero tra 1 a 5", "1"));
    if (userChoiceNumber <= 5 && userChoiceNumber >=1) {
        console.log("Hai scelto", userChoiceNumber)
        break
    } else {
        console.log("Il numero deve essere compreso tra 1 e 5");
    }
}
        
console.log("Ora tocca la pc!");
const pcNumber = pcNumberRandomize (5, 1); 

/* Sommiamo i due numeri */
console.log("Adesso sommiamo le vostre scelte...");
let playersSum = userChoiceNumber + pcNumber; 
console.log("La somma è", playersSum);

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione) */ 
function pcNumberRandomize (max, min) {
    const pcNumber = Math.floor(Math.random () * (max - min +1)) + min;
    console.log("Il PC ha scelto", pcNumber);
    return pcNumber;
}

/* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */ 


/* Dichiariamo chi ha vinto */ 

