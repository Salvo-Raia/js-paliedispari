console.log("Js is ready!");

/* Chiedere all’utente di inserire una parola */
console.log("Mai sentito parlare di palindromi? Si tratta di parole che si leggono alla stessa maniera da ambo i lati!");
console.log("Inserisci una parola palindroma, vediamo se hai afferrato il concetto...");

let userWordInsert = prompt("Inserisci una parola che ritieni palindroma", "non ti suggerisco nulla...")
const userWordReversed = userWordInsert.split("").reverse().join(""); 
console.log("Hai scritto", userWordInsert);
console.log("Che al contrario è:", userWordReversed);

AbbafyMe (userWordInsert, userWordReversed);
isTheWordPalindrome = isTheWordPalindromeResponse;
console.log(isTheWordPalindrome);
let wordMatch = (isTheWordPalindrome) ? "Sì, la parola è palindroma" : "No, questa parola non è palindroma"
console.log(wordMatch);

/* Creare una funzione per capire se la parola inserita è palindroma */ 
function AbbafyMe (userWordInsert, userWordReversed) {
isTheWordPalindromeResponse = (userWordInsert.toLowerCase()) === (userWordReversed.toLowerCase()) ? true : false;
return isTheWordPalindromeResponse;
}



