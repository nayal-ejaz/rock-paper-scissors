var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var winner;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img"); //<img>
        choice.id = choices[i]; // <img id="rock">
        choice.src = choices[i] + ".jpg"; // calculates src = rock.jpg
        choice.addEventListener("click", selectChoice); // call selectChoice() onClick
        document.getElementById("choices").append(choice); // appends src to img tag <img id="rock" src = "rock.jpg">
    }
}

function selectChoice () {
    you = this.id;  //this refers to img clicked
    document.getElementById ("your-choice").src = you + ".jpg"; // setting source img file of my choice

    // random func for opponent
    opponent = choices[Math.floor(Math.random() * 3)];
    // math.random() gives a random num b/w 0 and <1 : 0 to 0.99999....
    // upon multiplying with 3, result becomes 2.99999.... (3 because we need 3 index places)
    // math.floor() truncates all the decimal places and gives a whole number. so, o/p = 2
    // hence, the output is 0 to 2. Therefore, ramdom indexes 0, 1, 2 out of choices[i]
    // refer https://www.youtube.com/watch?v=1Rq_LrpcgIM&ab_channel=dcode
    document.getElementById("opponent-choice").src = opponent + ".jpg"; // setting source img file of opponent's choice
    setScoreAndWinner ();
}


function setScoreAndWinner () {
    if (you == opponent) {
        // yourScore += 1;
        // opponentScore += 1;
        winner = "none";
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
                winner = "player";
            }
            else if (opponent == "paper") {
                opponentScore += 1;
                winner = "computer";
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
                winner = "player";
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
                winner = "computer";
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
                winner = "player";
            }
            else if (opponent == "rock") {
                opponentScore += 1;
                winner = "computer";
            }
        }
    }
    // document.getElementById("your-score").innerText = yourScore;
    // document.getElementById("opponent-score").innerText = opponentScore;
    document.getElementById("your-score-display").innerText = "YOU: " + yourScore;
    document.getElementById("opponent-score-display").innerText = "COMPUTER: " + opponentScore;

    displayStonks();
}


function displayStonks() {
    
    if (winner == "none") {
        imageShownComputer = "confusedStonks.jpg";
        imageShownPlayer = "confusedStonks.jpg";
    }
    else if (winner == "player") {
        imageShownComputer = "notStonks.jpg";
        imageShownPlayer = "stonks.jpg";
    }
    else if (winner == "computer") {
        imageShownComputer = "stonks.jpg";
        imageShownPlayer = "notStonks.jpg";
    }
    document.getElementById('stonksOrNotComputer').src = imageShownComputer;
    document.getElementById('stonksOrNotPlayer').src = imageShownPlayer;


    // if (winner == "Its a tie!") {
    //     imageShown = "confusedStonks.jpg";
    // }
    // else if (winner == "player") {
    //     imageShown = "stonksPlayer.jpg";
    // }
    // else if (winner == "computer") {
    //     imageShown = "notStonks.jpg";
    // }
    // document.getElementById('stonksOrNot').src = imageShown;
}
