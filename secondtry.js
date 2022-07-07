let playerHand = [];
let dealerHand = [];
const suits = ["spades", "clubs", "hearts", "diamonds"];
const values = [
  "A",
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
];
let deck = [];
let cards = document.querySelector(".cards");

function createDeck(deck2) {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let weight = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
      if (values[i] == "A") weight == 11;
      let card = { value: values[x], suit: suits[i] };
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

//Renders the Deck
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

//Renders the Deck
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
function dealDealerHand() {
  let card = deck.pop();
  dealerHand.push(card);
  renderDealerDeck();
}

function dealPlayerHand() {
  let card = deck.pop();
  playerHand.push(card);
  renderPlayerDeck();
}

function startGame() {
  createDeck(deck);
  shuffle(deck);
  dealDealerHand();
  dealDealerHand();
  dealPlayerHand();
  dealPlayerHand();
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

console.log(playerHand);

// event listeners
let hitButton = document.querySelector("#hit");
hitButton.addEventListener("click", function hitMe() {
  dealPlayerHand();
  checkWin();
});
