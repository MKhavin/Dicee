function setDiceValueFor(player) {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    let imageName = "dice" + diceValue + ".png";

    let elements = document.getElementsByClassName(player);

    if (elements.length > 0) {
        let element = elements[0].setAttribute("src", "images/" + imageName);

        return diceValue;
    }

    return 6;
}

function setWinner(player1Value, player2Value) {
    var title = "";

    if (player1Value === player2Value) {
        title = "Draw";
    } else if (player1Value > player2Value) {
        title = "🚩 Player 1 Wins!";
    } else {
        title = "Player 2 Wins! 🚩";
    }

    let element = document.querySelector("h1");
    element.textContent = title;
}

let player1Value = setDiceValueFor("player1-img");
let player2Value = setDiceValueFor("player2-img");

setWinner(player1Value, player2Value);