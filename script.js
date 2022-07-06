//Global variables
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
let players = [];
let card = document.querySelector(".cards");

//Game logic

//Creates the deck of cards with two for loops then pushs the cards into the deck array
function createDeck(deck2) {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let weight = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
      if (values[i] == "A") weight == 11 || weight == 1;
      let card = { value: values[x], suit: suits[i] };
      deck2.push(card);
    }
  }
  return deck2;
}
createDeck(deck);
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

//Render Deck
function renderDeck(thing) {
  document.getElementsByClassName("deck").innerHTML = "";
  console.log(deck);
  for (let i = 0; i < deck.length; i++) {
    console.log(thing);
    let value = document.createElement("div");
    let suit = document.createElement("div");
    value.className = "value";
    suit.className = "suit" + deck[i].suit;

    value.innerHTML = deck[i].value;
    value.appendChild(suit);
    thing.appendChild(value);
  }
}
renderDeck(card);

//Creates the player
function createPlayers(num) {
  players = [];
  for (let i = 1; i <= num; i++) {
    let deal = [];
    let player = { name: "Player " + i, id: i, hand: deal };
    players.push(player);
  }
  return players;
}
//Creates the cards of the deck
function createCards(card) {
  const tops = document.querySelector(".cards");
  tops.innerHTML = card.suit + "" + card.value;
  return tops;
}

//Renders the cards
function renderCards(card, players) {
  const hand = document.getElementById("player-hand" + players);
  hand.appendChild(createCards(card));
}
//Deals the hands to players
function dealOut() {
  for (let i = 0; i < 2; i++) {
    for (let x = 0; x < players.length; x++) {
      let card = deck.pop();
      players[x].hand.push(card);
    }
  }
}

//Hit me button
function hitMe() {
  let card = deck.pop();
  players[i].hand.push(card);
  renderCards(card, players[i]);
}
