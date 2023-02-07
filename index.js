// Get Random numbers for dices
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Get dices img elements
let playerOneDiceImg = document.querySelector('.img1');
let playerTwoDiceImg = document.querySelector('.img2');
// Set random images according to random numbers
playerOneDiceImg.setAttribute("src", `./images/dice${randomNumber1}.png`);
playerTwoDiceImg.setAttribute("src", `./images/dice${randomNumber2}.png`);

// Get main-title element
let mainTitle = document.querySelector('.main-title');
// Set main-title text according to players score (win / draw)
if (randomNumber1 > randomNumber2) {
    mainTitle.textContent = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    mainTitle.textContent = "Player 2 Wins!"
} else {
    mainTitle.textContent = "Draw!"
}
