function getRandomValue() {
    let randomValue = Math.floor(Math.random() * 6 + 1 );
    let imageName = "dice" + randomValue + ".png";

    return imageName;
}

function setDiceValueFor(player) {
    let diceValue = getRandomValue();
    let elements = document.getElementsByClassName(player);

    if (elements.length > 0) {
        let element = elements[0].setAttribute("src", "images/" + diceValue);
    }
}

setDiceValueFor("player1-img");
setDiceValueFor("player2-img");