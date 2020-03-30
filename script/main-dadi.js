/**
 * Gioco dei Dadi
 */

//  1. numero random per l'utente e per il computer

var userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

var computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

// 2. Stabilire il vincitore, in base a chi fa il punteggio più alto

var dadi = document.getElementById('dadi');

dadi.addEventListener('click',
    function() {
        var result = 'tira i dadi';

        if (userNumber > computerNumber) {
            console.log('Ha vinto il Giocatore');
            result = 'Ha vinto il Giocatore';
        
        } else if (userNumber < computerNumber) {
            console.log('Ha vinto il Computer');
            result = 'Ha vinto il Computer';
        
        } else {
            console.log('Pareggio');
            result = 'Pareggio';
        }

        document.getElementById('risultato').innerHTML = result;
    }
)

// risultati in html

document.getElementById('giocatore').innerHTML = userNumber;
document.getElementById('computer').innerHTML = computerNumber;
