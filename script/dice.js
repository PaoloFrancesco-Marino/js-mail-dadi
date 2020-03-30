/**
 * Gioco dei Dadi
 */


var dadi = document.getElementById('dadi');

dadi.addEventListener('click',
    function() {
        //  1. numero random per l'utente e per il computer
        var userNumber = Math.floor(Math.random() * 6) + 1;
        console.log(userNumber);

        var computerNumber = Math.floor(Math.random() * 6) + 1;
        console.log(computerNumber);
        var result = 'tira i dadi';

        // 2. Stabilire il vincitore, in base a chi fa il punteggio più alto

        if (userNumber > computerNumber) {
            console.log('Ha vinto il Giocatore');
            result = 'Hai Vinto';
        
        } else if (userNumber < computerNumber) {
            console.log('Ha vinto il Computer');
            result = 'Hai Perso';
        
        } else {
            console.log('Pareggio');
            result = 'Pareggio';
        }

        // risultati in html
        document.getElementById('giocatore').innerHTML = userNumber;
        document.getElementById('computer').innerHTML = computerNumber;
        document.getElementById('risultato').innerHTML = result;
    }
)




