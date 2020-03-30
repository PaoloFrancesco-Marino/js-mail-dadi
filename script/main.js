/**
 * Cerca in un Array
 */

// 1. chiedi all'utente la sua email

var email = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
console.table(email); 

var emailUser = prompt('Inserisci la tua Email').toLowerCase();

// 2. controlla che sia nella lista di chi può accedere

var foundEmail = false;

for (var i = 0; i < email.length; i++) {
    var user = email[i];

    if (emailUser == user) {
        foundEmail = true;
    }
}

// 3. stampa un msg appropriato sull'esito del controllo

if (foundEmail == true) {
    // utente trovato
    console.log('email trovata');
} else {
    console.log('email non trovata');
}