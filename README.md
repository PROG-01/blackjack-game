# Blackjack Game

This is a simple browser-based Blackjack game built with HTML, CSS, and JavaScript. The project simulates a basic version of the classic card game, allowing a player to compete against a dealer.

## Features

* Start a new game with the **Start Game** button
* Draw cards using the **Hit** button
* End your turn using the **Stand** button
* Automatic dealer logic (draws until reaching at least 17)
* Real-time score updates for both player and dealer
* Visual card display using images from an external API
* Game result messages (win, lose, tie, blackjack, bust)
* Responsive layout for smaller screens

## Tech Stack Used

* HTML
* CSS
* JavaScript

## Project Structure

```id="6x9v6m"
/project-folder
│── index.html     # Main structure of the game
│── styles.css     # Styling and layout
│── script.js      # Game logic
```

## How the Game Works

1. Click **Start Game** to begin a new round
2. Two cards are dealt to both the player and the dealer
3. The player can:

   * Click **Hit** to draw another card
   * Click **Stand** to end their turn
4. The dealer automatically draws cards until their score is at least 17
5. The winner is determined based on:

   * Closest score to 21
   * Bust conditions (score over 21)

## Game Rules (Simplified)

* Number cards are worth their face value
* Face cards (J, Q, K) are worth 10
* Ace is worth 11
* If a player exceeds 21, they bust
* The dealer must draw until reaching at least 17

## How to Run the Project

1. Download or clone the repository
2. Open `index.html` in your browser
3. Click **Start Game** and play

## Possible Improvements

* Handle Ace as 1 or 11 dynamically
* Add betting or scoring system across rounds
* Hide one of the dealer’s cards until the player stands
* Add animations for card dealing
* Improve UI/UX and add sound effects
* Prevent duplicate cards (simulate a real deck)

## Notes

This is a simplified version of Blackjack intended for learning purposes. Some real-world rules (like multiple decks or flexible Ace values) are not fully implemented.

## License

Free to use for learning and personal projects.
