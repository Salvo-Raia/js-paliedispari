/* Chiedere all’utente di inserire una parola */
console.log("Mai sentito parlare di palindromi? Si tratta di parole che si leggono alla stessa maniera da ambo i lati!");
console.log("Inserisci una parola palindroma, vediamo se hai afferrato il concetto...");

let userWordInsert = prompt("Inserisci una parola che ritieni palindroma", "non ti suggerisco nulla...")
const userWordReversed = userWordInsert.split("").reverse().join(""); 
console.log("Hai scritto", userWordInsert);
console.log("Che al contrario è:", userWordReversed);

let isTheWordPalindromeResponse = AbbafyMe (userWordInsert, userWordReversed);
console.log(isTheWordPalindromeResponse);

let wordMatch = (isTheWordPalindromeResponse) ? "Sì, la parola è palindroma" : "No, questa parola non è palindroma"
console.log(wordMatch);

//* Funzioni
/* Creare una funzione per capire se la parola inserita è palindroma */ 
/**
 * This function check if a word is exactly the same when reversed. If this is the case, it returns a true value;
 * @param {string} userWordInsert is a string prompted by user. 
 * @param {string} userWordReversed is the same string prompted by user, but reversed.
 * @const {boolean} isTheWordPalindromeResponse check if both the regular and reversed string matches as the same word;
 * @returns {boolean} 
 */
function AbbafyMe (userWordInsert, userWordReversed) {
const isTheWordPalindrome = userWordInsert.toLowerCase() === userWordReversed.toLowerCase() 
return isTheWordPalindrome;
}


