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

  // Initialising score values
  let playerScoreValue = 0;
  let dealerScoreValue = 0;

  // playerScore.textContent = " ";
  // dealerScore.textContent = " "; 

startButton.addEventListener("click", function () {

  // Prevent restarting game
  if (playerScoreValue !== 0 || dealerScoreValue !== 0) {
    alert("Game already started!");
    return;
  } 

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
});

hitButton.addEventListener("click", function() {
  if (playerScoreValue === 0) 
  {
    alert("Please start the game first!");
    return;
  }
  else if (playerScoreValue < 17) 
  {
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    playerCard.textContent += ` ${randomCard.rank}`;
    playerScoreValue += randomCard.value;
    playerScore.textContent = "Score: " + playerScoreValue;
  } 
  else 
  {
    alert("Player stands. Final Scores - Player: " + playerScoreValue + ", Dealer: " + dealerScoreValue);
  }
})

standButton.addEventListener("click", function() {
  if (playerScoreValue === 0) 
  {
    alert("Please start the game first!");
    return;
  }
  else if (dealerScoreValue < 17) 
  {
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    dealerCard.textContent += ` ${randomCard.rank}`;
    dealerScoreValue += randomCard.value;
    dealerScore.textContent = "Score: " + dealerScoreValue;
  } else 
  {
    alert("Dealer stands. Final Scores - Player: " + playerScoreValue + ", Dealer: " + dealerScoreValue);
  }
})
