let cards = 
[
    { "rank": "A", "value": 11 },
    { "rank": "2", "value": 2 },
    { "rank": "3", "value": 3 },
    { "rank": "4", "value": 4 },
    { "rank": "5", "value": 5 },
    { "rank": "6", "value": 6 },
    { "rank": "7", "value": 7 },
    { "rank": "8", "value": 8 },
    { "rank": "9", "value": 9 },
    { "rank": "10", "value": 10 },
    { "rank": "J", "value": 10 },
    { "rank": "Q", "value": 10 },
    { "rank": "K", "value": 10 }
];
  let playerScore = document.getElementById("player-score");
  let dealerScore = document.getElementById("dealer-score");
  let playerCard = document.getElementById("player");
  let dealerCard = document.getElementById("dealer");
  let hitButton = document.getElementById("hit");
  let standButton = document.getElementById("stand");
  let startButton = document.getElementById("start");
  let message = document.getElementById("message");

  let playerScoreValue = 0;
  let dealerScoreValue = 0;

  let gameStarted = false;
  let isAlive = false;

  function checkPlayerStatus() {
     if (playerScoreValue === 21) {
    message.textContent = "You have got Blackjack!";
    isAlive = false;
} else if (playerScoreValue > 21) {
    message.textContent = "You have busted!";
    isAlive = false;
} else {
    message.textContent = "Do you want to draw a new card?";
}
}

function checkDealerStatus() {
  if (dealerScoreValue === 21) {
    message.textContent = "Dealer has got Blackjack!";
} else if (dealerScoreValue > 21) {
    message.textContent = "Dealer has busted!";
} else {
    message.textContent = "Do you want to draw a new card?";
}
}

function resetGame(){

  playerScoreValue = 0;
  dealerScoreValue = 0;
  playerCard.textContent = "Player:";
  dealerCard.textContent = "Dealer:";
}

function dealerTurn() {

  function drawCard() {
    if (dealerScoreValue <= 17) {

      let randomCard = cards[Math.floor(Math.random() * cards.length)];
      dealerCard.textContent += ` ${randomCard.rank}`;
      dealerScoreValue += randomCard.value;
      dealerScore.textContent = "Score: " + dealerScoreValue;

      // ⏳ Wait 1 second, then draw again
      setTimeout(drawCard, 1000);

    } else {
      // ✅ Done drawing → decide winner
      decideWinner();
    }
  }

  drawCard(); // start the process
}

startButton.addEventListener("click", function () {
  // Prevent restarting game
  if (isAlive) {
    message.textContent = "Game already started!";
    return;
  }
  resetGame();
  isAlive = true;
  gameStarted = true;

  // Draw random cards
  let p1 = cards[Math.floor(Math.random() * cards.length)];
  let p2 = cards[Math.floor(Math.random() * cards.length)];
  let d1 = cards[Math.floor(Math.random() * cards.length)];
  let d2 = cards[Math.floor(Math.random() * cards.length)];

  // Display ranks
  playerCard.textContent = `Player: ${p1.rank} ${p2.rank}`;
  dealerCard.textContent = `Dealer: ${d1.rank} ${d2.rank}`;

  // Update scores and track values
  playerScoreValue = p1.value + p2.value;
  dealerScoreValue = d1.value + d2.value;
  playerScore.textContent = "Score: " + playerScoreValue;
  dealerScore.textContent = "Score: " + dealerScoreValue;

  checkPlayerStatus();
});


hitButton.addEventListener("click", function() {
  if (!gameStarted || !isAlive) {
    message.textContent = "Please start the game first!";
    return;
  }

  message.textContent = "Do you wish to draw another card?";
  let randomCard = cards[Math.floor(Math.random() * cards.length)];
  playerCard.textContent += ` ${randomCard.rank}`;
  playerScoreValue += randomCard.value;
  playerScore.textContent = "Score: " + playerScoreValue;
    
    checkPlayerStatus();
})

standButton.addEventListener("click", function() {
  if (!gameStarted || !isAlive) {
    message.textContent = "Please start the game first!";
    return;
  }

  isAlive = false;

  dealerTurn();

dealerScore.textContent = "Score: " + dealerScoreValue;
checkPlayerStatus();

// Decide winner
if (dealerScoreValue > 21 || playerScoreValue > dealerScoreValue) {
    message.textContent = "You win!";
} else if (dealerScoreValue > playerScoreValue) {
    message.textContent = "Dealer wins!";
} else {
    message.textContent = "It's a draw!";
}
isAlive = false;
})
