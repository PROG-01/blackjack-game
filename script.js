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

// Function to get card image from CDN
function getCardImage(rank) {
  const suits = ["H", "D", "C", "S"]; // Hearts, Diamonds, Clubs, Spades
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  return `https://deckofcardsapi.com/static/img/${rank}${randomSuit}.png`;
}

// Function to add card image to container
function addCardImage(container, rank) {
  let img = document.createElement("img");
  img.src = getCardImage(rank);
  img.style.width = "60px";
  img.style.height = "90px";
  img.style.margin = "5px";
  img.style.borderRadius = "5px";
  container.appendChild(img);
}

function checkPlayerStatus() {
  if (playerScoreValue === 21) {
    message.textContent = "You have got Blackjack!";
    isAlive = false;
  } else if (playerScoreValue > 21) {
    message.textContent = "You have busted!";
    isAlive = false;
  } else {
    message.textContent = "Do you want to draw another card?";
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

function resetGame() {
  playerScoreValue = 0;
  dealerScoreValue = 0;
  playerCard.innerHTML = "<p>Player:</p>";
  dealerCard.innerHTML = "<p>Dealer:</p>";
}

function dealerTurn() {
  function drawCard() {
    if (dealerScoreValue <= 17) {
      let randomCard = cards[Math.floor(Math.random() * cards.length)];
      addCardImage(dealerCard, randomCard.rank);
      dealerScoreValue += randomCard.value;
      dealerScore.textContent = "Score: " + dealerScoreValue;

      setTimeout(drawCard, 1000);
    } else {
      decideWinner();
    }
  }

  drawCard();
}

startButton.addEventListener("click", function () {
  if (isAlive) {
    message.textContent = "Game already started!";
    return;
  }
  resetGame();
  isAlive = true;
  gameStarted = true;

  let p1 = cards[Math.floor(Math.random() * cards.length)];
  let p2 = cards[Math.floor(Math.random() * cards.length)];
  let d1 = cards[Math.floor(Math.random() * cards.length)];
  let d2 = cards[Math.floor(Math.random() * cards.length)];

  addCardImage(playerCard, p1.rank);
  addCardImage(playerCard, p2.rank);
  addCardImage(dealerCard, d1.rank);
  addCardImage(dealerCard, d2.rank);

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

  let randomCard = cards[Math.floor(Math.random() * cards.length)];
  addCardImage(playerCard, randomCard.rank);
  playerScoreValue += randomCard.value;
  playerScore.textContent = "Score: " + playerScoreValue;
  
  checkPlayerStatus();
});

standButton.addEventListener("click", function() {
  if (!gameStarted || !isAlive) {
    message.textContent = "Please start the game first!";
    return;
  }

  isAlive = false;
  dealerTurn();
});
