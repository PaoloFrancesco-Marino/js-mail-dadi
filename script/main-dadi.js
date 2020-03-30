/**
 * Gioco dei Dadi
 */

//  1. numero random per l'utente e per il computer

var userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

var computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

// 2. Stabilire il vincitore, in base a chi fa il punteggio più alto

var vincita;

if (vincita = userNumber > computerNumber) {
    console.log('Ha vinto il Giocatore');

} else if (vincita = userNumber < computerNumber) {
    console.log('Ha vinto il Computer');

} else {
    console.log('Pareggio');
}