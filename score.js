let player1Button = document.querySelector("#player1Button");
let player2Button = document.querySelector("#player2Button");
let resetButton = document.querySelector("#resetButton");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let numInput = document.querySelector("input");
//var playingTo = document.getElementById("playingTo");
//Can do below instead of above because it's the only <span> inside of a <p>
let playingTo = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
let playingToLine = document.getElementById("playing-to")


numInput.addEventListener("change", function() {
        winningScore = Number(this.value);
        playingTo.textContent = this.value;
        reset();
    })
    //Keyword this refers to numInput, what the event listener is listening for

player1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        console.log(p1Score, winningScore);
        if (p1Score === winningScore) {
            gameOver = true;
            player1.classList.add("green");
            player2.classList.add("red");
        }
        player1.textContent = p1Score;
    }
});

player2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            player2.classList.add("green");
            player1.classList.add("red");
        }
        player2.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function() {
    reset();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    player1.textContent = p1Score;
    player2.textContent = p2Score;
    player1.classList.remove("green");
    player2.classList.remove("green");
    player1.classList.remove("red");
    player2.classList.remove("red");
    gameOver = false;
}