/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. */ 
console.log("Scegli quale risultato prevedi tra pari o dispari");
userChoiceOddEven = prompt("Pari o dispari?", "Pari");
console.log("Hai scelto", userChoiceOddEven.toLowerCase());
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
        
console.log("Ora tocca al pc!");
const pcChoice = pcNumberRandomize (5, 1); 

/* Sommiamo i due numeri */
console.log("Adesso sommiamo le vostre scelte...");
let playersSum = userChoiceNumber + pcChoice; 
console.log("La somma è", playersSum);
let victory = victoryResult(userChoiceOddEven, playersSum);

/* Dichiariamo chi ha vinto */ 
let finalMessage = (victory) ? "Hai vinto!" : "Hai perso!" 
console.log(finalMessage);
console.log("Ricarica la pagina per giocare una nuova partita!");


/* Funzioni   
/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione) */ 

/**
 * This function generate a random number between a min and max value
 * 
 * @param {Number} max the maximum range value for a random number generation
 * @param {Number} min the minimal range value for a random number generation
 * @returns {Number} the random number result
 */
function pcNumberRandomize (max, min) {
    const pcNumber = Math.floor(Math.random () * (max - min +1)) + min;
    console.log("Il PC ha scelto", pcNumber);
    return pcNumber;
}

/**
 * This function verify if one of the two scenarios is true. If one of them is true, victory const is true;
 * @param {string} userChoiceOddEven is a user prompt choice (generally between "pari" and "dispari")
 * @param {Number} playersSum a sum of two numbers.
 * @returns {boolean} a boolean value.
 */
/* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */ 
function victoryResult (userChoiceOddEven, playersSum) {
    const firstWinCondition = (userChoiceOddEven.toLowerCase() == "pari") && (playersSum % 2 === 0); 
    const secondWinCondition = (userChoiceOddEven.toLowerCase() == "dispari") && (playersSum % 2 !== 0); 
    const victory = firstWinCondition || secondWinCondition; 
    return victory; 
}






