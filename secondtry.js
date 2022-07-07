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
let newTurn = document.querySelector("#new-hand");
//Game logic

//Checks for aces
function checkPlayerAce() {
  sum = 0;
  playerHand.forEach((playerHand) => {
    sum += playerHand.total;
  });
  for (let i = 0; i < playerHand.length; i++) {
    if (playerHand[i].value == "A" && sum > 21) {
      playerHand[i].total = 1;
    }
  }
}

//Checks for aces
function checkDealerAce() {
  sum = 0;
  dealerHand.forEach((dealerHand) => {
    sum += dealerHand.total;
  });
  for (let i = 0; i < dealerHand.length; i++) {
    if (dealerHand[i].value == "A" && sum > 21) {
      dealerHand[i].total = 1;
    }
  }
}
//Checks for aces
function checkAce() {
  checkDealerAce();
  checkPlayerAce();
}

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

//Renders the drawn cards
function renderPlayerCards(deckOfCards) {
  if (playerHand.length > 2) {
    let card = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card-value";
    suit.className = "suit: " + playerHand.suit;
    card.innerHTML = playerHand[playerHand.length - 1].value;
    deckOfCards.appendChild(card);
    card.appendChild(suit);
  }
}

//renders the drawn cards
function renderDealerCards(deckOfCards) {
  if (dealerHand.length > 2) {
    let card = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card-value";
    suit.className = "suit: " + dealerHand.suit;
    card.innerHTML = dealerHand[dealerHand.length - 1].value;
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
  checkForWin();
}

//Render player hand
function renderPlayerHand() {
  let player = document.querySelector("#player-hand");
  renderPlayerDeck(player);
}

//Render player hand
function renderPlayerHand2() {
  let player = document.querySelector("#player-hand");
  renderPlayerCards(player);
}

//Render dealer hand
function renderDealerHand() {
  let dealer = document.querySelector("#dealer-hand");
  renderDealerDeck(dealer);
}

//Render dealer hand
function renderDealerHand2() {
  let dealer = document.querySelector("#dealer-hand");
  renderDealerCards(dealer);
}
//Deals extra cards to the dealer
function dealerNeedsAnother() {
  let sum = 0;
  let sum2 = 0;
  playerHand.forEach((playerHand) => {
    sum2 += playerHand.total;
  });
  dealerHand.forEach((dealerHand) => {
    sum += dealerHand.total;
  });
  if (sum < 17 && sum < sum2) {
    dealDealerHand();
    renderDealerHand2();
  }
  console.log(sum);
}

//Checks for win at the start of the game
function checkForWin() {
  let sum = 0;
  let sum2 = 0;
  playerHand.forEach((playerHand) => {
    sum += playerHand.total;
  });
  dealerHand.forEach((dealerHand) => {
    sum2 += dealerHand.total;
  });
  if (sum == 21 && sum2 != 21) {
    alert("You win!");
  } else if (sum2 == 21) {
    alert("You lose:(");
  }
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
  dealerNeedsAnother();
  dealerNeedsAnother();
  console.log(sum);
  console.log(sum2);
  if (sum > 21) {
    alert("You lose :( ");
  } else if (sum <= 21 && sum > sum2) {
    alert("You Win!");
  } else if (sum === sum2) {
    alert("You lose :(");
  }
}

console.log(playerHand);
console.log(dealerHand);
startGame();

// event listeners
function renew() {
  window.location.reload(false);
}
hitButton.addEventListener("click", function hitMe() {
  dealPlayerHand();
  renderPlayerHand2();
  checkAce();
  checkWin();
});
stand.addEventListener("click", function stand() {
  checkAce();
  checkWin();
});
