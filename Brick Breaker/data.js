let playerName = "";
function getPlayerName() {
    playerName = document
    .getElementById("playerName")
    .value;
    if (playerName.trim() === "") {
        playerName="Anonymous";
    }
}
function startGame() {
    getPlayerName();
    document.getElementById("startScreen")
        .style.display = "none";
        document.getElementById("gameScreen")
        .style.display = "block";
        Text.draw (`Hello, ${playerName}!
                             Click to Play!`); 
        canvas.removeEventListener('click', startGame);
        canvas.addEventListener('click', x);                       
}
document.getElementById("startButton")
    .addEventListener("click", startGame);