var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;
const responcesLow = ['That was too low human.', 'Too low. There is no way you can defeat me human!', 'That number is too low, human.', 'Low number, want to keep trying? You wont defeat me anyways.', 'Lol, that was too low human.', 'Low number, mere human.', 'your number is low, there is no way you can defeat me my sistem.', 'Low number. Do you really want to keep going?', 'LMAO, go on. Keep losing mere human!', 'Your number is too low.'];
const responcesHigh = ['Too high.', 'Come on human. That number was too high!', 'Yout number is too high. Seriusly want to keep going?', 'That number is high. There is no way you can win this mortal.', 'That number is high. There is no point on keep losing. Is it?', 'High number. I will win, no matter what!', 'Hahahaha, too high.', 'High. There is no point human!', 'Too high. You cant defeat this amazing softawre!', 'Too high. Really wnt to keep going? You just keep loosing!'];
const responcesWin = ['Nooo!!! You win? But you are a mere human!', 'Nooo, you win? It cannot be!', 'You win? How did you do it?!', 'Nooo, how could you win?', 'You win?! How did you do it? Are you that famous hacker?','Nooo!! How could you?'];

function gameEnded() {
    document.getElementById('newGameBtn').style.display = 'inline';
    document.getElementById('hardBtn').style.display = 'none';
    document.getElementById('easyBtn').style.display = 'none';
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}

function easyMode() {
    maxGuesses = 10;
    document.getElementById('easyBtn').className = 'activeBtn';
    document.getElementById('hardBtn').className = '';
}
function hardMode() {
    maxGuesses = 5;
    document.getElementById('hardBtn').className = 'activeBtn';
    document.getElementById('easyBtn').className = '';
}

function newGame() {
    window.location.reload();
}

function init() {
    // ! Generate a random number.
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
    document.getElementById('newGameBtn').style.display = 'none';
}

function compareGuess() {
    var userGuess = "" + document.getElementById('inputBox').value;

    // ! Add the value to the array.
    userGuessLog.push(userGuess);

    document.getElementById('guessLog').innerHTML = userGuessLog;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;

    // ! The main logic.
    if (userGuessLog.length < maxGuesses) {
        if (userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = responcesHigh[Math.floor(Math.random() * responcesHigh.length)];
            document.getElementById('inputBox').value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = responcesLow[Math.floor(Math.random() * responcesLow.length)];
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = responcesWin[Math.floor(Math.random() * responcesWin.length)] + ' <br> You got it in ' + attempts + ' attempts!';
            document.getElementById('comp').classList.add('compWin');
            document.getElementById('light').classList.add('lightWin');
            document.getElementById('fire').classList.add('fireWin');
            // ! Game End.
            gameEnded();
        }
    } else {
        if (userGuessLog > computerGuess) {
            document.getElementById('textOutput').innerHTML = 'Lol, You lose human. I am invincible.' + '<br> The number was ' + computerGuess + '.';
            // ! Game End.
            gameEnded();
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = 'Lol, You lose human. I am invincible.' + '<br> The number was ' + computerGuess + '.';
            // ! Game End.
            gameEnded();
        } else {
            document.getElementById('textOutput').innerHTML = responcesWin[Math.floor(Math.random() * responcesWin.length)] + ' <br> You got it in ' + attempts + ' attempts!';
            document.getElementById('comp').classList.add('compWin');
            document.getElementById('light').classList.add('lightWin');
            document.getElementById('fire').classList.add('fireWin');
            // ! Game End.
            gameEnded();
        }
    }
}