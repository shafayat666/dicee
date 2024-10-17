document.querySelector("button").addEventListener("click", rollDice);

function rollDice() {

    function randomNum() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        return randomNumber;
    }
    
    var player1Num = randomNum();
    var player2Num = randomNum();
    
    document.querySelector(".img1").src = "./images/dice" + player1Num + ".png";
    document.querySelector(".img2").src = "./images/dice" + player2Num + ".png";
    
    if (player1Num > player2Num) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!🚩"
    }
    
    else if (player1Num < player2Num) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
    }
    
    else {
        document.querySelector("h1").innerHTML = "It's a draw."
    }    
}
