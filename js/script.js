console.log("Js is ready to go!");

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. */ 
console.log("Scegli tra pari o dispari");
userChoiceOddEven = prompt("Pari o dispari?", "Pari");
console.log("Bene, è il momento di scegliere un numero");
userChoiceNumber = prompt("Scegli un numero tra 1 a 5", "1");

let i = 0;
let playersSum = 0;
for (; i === 0; ) {
    userChoiceNumber = parseInt(prompt("Scegli un numero tra 1 a 5", "1"));
    if (userChoiceOddEven == "pari" && userChoiceNumber % 2 == 0) {
        break
    } else {
        console.log("Non è un numero pari");
    }
} 
let playersSum = userChoiceNumber + pcNumber; 


console.log("Hai scelto", parseInt(userChoiceNumber));
pcNumberRandomize (5, 1); 

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione) */ 
function pcNumberRandomize (max, min) {
    const pcNumber = Math.floor(Math.random () * (max - min +1)) + min;
    console.log("Il PC ha scelto", pcNumber);
    return pcNumber;
}


/* Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto */ 

