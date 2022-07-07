//Global variables
let playerHand = [];
let dealerHand = [];
const suits = ["spades", "clubs", "hearts", "diamonds"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
let deck = [];
let cards = document.querySelector(".cards");
let hitButton = document.querySelector("#hit");
let stand = document.querySelector("#stand");
//Game logic

//Creaates the deck
function createDeck(deck2) {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let sum = parseInt(values[x]);
      if (values[x] == "J") sum = 10;
      if (values[x] == "Q") sum = 10;
      if (values[x] == "K") sum = 10;
      if (values[x] == "A") sum = 11;
      let card = { value: values[x], suit: suits[i], total: sum };
      deck2.push(card);
    }
  }
  return deck2;
}

//Shuffles the deck so it isn't the same every time
function shuffle(pile) {
  for (let i = 0; i < 100; i++) {
    let firstCut = Math.floor(Math.random() * pile.length);
    let secondCut = Math.floor(Math.random() * pile.length);
    let thirdCut = pile[firstCut];
    pile[firstCut] = pile[secondCut];
    pile[secondCut] = thirdCut;
  }
  return pile;
}

//Renders the Players Deck
function renderPlayerDeck(deckOfCards) {
  document.getElementsByClassName("deck").innerHTML = "";
  for (let i = 0; i < playerHand.length; i++) {
    let card = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card-value";
    suit.className = "suit: " + playerHand[i].suit;
    card.innerHTML = playerHand[i].value;
    deckOfCards.appendChild(card);
    card.appendChild(suit);
  }
}

//Renders the Dealers Deck
function renderDealerDeck(deckOfCards) {
  document.getElementsByClassName("deck").innerHTML = "";
  for (let i = 0; i < dealerHand.length; i++) {
    let card = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card-value";
    suit.className = "suit: " + dealerHand[i].suit;
    card.innerHTML = dealerHand[i].value;
    deckOfCards.appendChild(card);
    card.appendChild(suit);
  }
}

//Deals out cards to the dealer
function dealDealerHand() {
  let card = deck.pop();
  dealerHand.push(card);
}

//Deals out cards to the player
function dealPlayerHand() {
  let card = deck.pop();
  playerHand.push(card);
}

// function getPlayerSum(string) {
//   let sum = 0;
//   for (let i = 0; i < playerHand.length; i++) {
//     sum += playerHand.total;
//   }
//   playerHand.total = sum;
//   return sum;
// }

//Starts the game
function startGame() {
  createDeck(deck);
  shuffle(deck);
  dealDealerHand();
  dealDealerHand();
  renderDealerHand();
  dealPlayerHand();
  dealPlayerHand();
  renderPlayerHand();
}
startGame();

//Render player hand
function renderPlayerHand() {
  let player = document.querySelector("#player-hand");
  renderPlayerDeck(player);
}

//Render dealer hand
function renderDealerHand() {
  let dealer = document.querySelector("#dealer-hand");
  renderDealerDeck(dealer);
}

//Checks for win
function checkWin() {
  let sum = 0;
  let sum2 = 0;
  playerHand.forEach((playerHand) => {
    sum += playerHand.total;
  });
  dealerHand.forEach((dealerHand) => {
    sum2 += dealerHand.total;
  });
  console.log(sum);
  if (sum > 21) {
    alert("You lose :( ");
  } else if (sum <= 21 && sum > sum2) {
    alert("You Win!");
  }
}
console.log(playerHand);
console.log(dealerHand);
// event listeners

hitButton.addEventListener("click", function hitMe() {
  dealPlayerHand();
  renderPlayerHand();
  checkWin();
});

stand.addEventListener("click", checkWin);
