/**
 * Cerca in un Array
 */

// array di dati

var email = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
console.table(email); 

// 1. chiedi all'utente la sua email

var nome = document.getElementById('email').value;
var login = document.getElementById('login');
var buttonDice = document.getElementById('button-dice');
var message;


login.addEventListener('click',
    function() {
        var nome = document.getElementById('email').value;

        var foundEmail = false;

        for (var i = 0; i < email.length; i++) {
            var user = email[i];
        
            if (nome == user) {
                foundEmail = true;
            }
        }

        // 3. stampa esito del controllo

        if (foundEmail == true) {
            // utente trovato
            console.log('email trovata');
            message = 'Email trovata'
            // mostra button gioco dei dadi
            buttonDice.className = buttonDice.classList =  + ' show' + ' btn';
        } else {
            // utente non trovato
            console.log('email non trovata');
            message = 'Email non trovata'
        }

        // inserisco in html
        document.getElementById('autenticazione') .innerHTML = message;  
    }
)















