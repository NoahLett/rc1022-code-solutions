console.log('Lodash is loaded:', typeof _ !== 'undefined');

var collectionOfPlayers = [];

function Player(name) {
  this.name = name;
  this.hand = [];
}
var player1 = new Player('Matthew');
var player2 = new Player('Mark');
var player3 = new Player('Luke');
var player4 = new Player('John');

collectionOfPlayers.push(player1, player2, player3, player4);

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

var shuffledDeck = [];

function createShuffledDeck() {
  var cardDeck = [];
  var jack = 10;
  var queen = 10;
  var king = 10;
  var ace = 11;
  var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace];
  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < ranks.length; x++) {
      var card = new Card(suits[i], ranks[x]);
      cardDeck.push(card);
    }
  }
  shuffledDeck = _.shuffle(cardDeck);
  return shuffledDeck;
}
createShuffledDeck();

Player.prototype.deal = function () {
  for (var i = 0; i < shuffledDeck.length; i++) {
    while (player1.hand.length < 2) {
      player1.hand.push(shuffledDeck[i++]);
    }
    while (player2.hand.length < 2) {
      player2.hand.push(shuffledDeck[i++]);
    }
    while (player3.hand.length < 2) {
      player3.hand.push(shuffledDeck[i++]);
    }
    while (player4.hand.length < 2) {
      player4.hand.push(shuffledDeck[i++]);
    }
  }
};

player1.deal();
player2.deal();
player3.deal();
player4.deal();

function playerTotal(player) {
  var totalScore = 0;
  for (var i = 0; i < player.hand.length; i++) {
    totalScore += player.hand[i].rank;
  }
  return totalScore;
}

var player1Total = playerTotal(player1);
var player2Total = playerTotal(player2);
var player3Total = playerTotal(player3);
var player4Total = playerTotal(player4);

player1.total = player1Total;
player2.total = player2Total;
player3.total = player3Total;
player4.total = player4Total;

function findWinner(collectionOfPlayers, key) {
  var winner = collectionOfPlayers[0];
  for (var i = 0; i < collectionOfPlayers.length; i++) {
    var value = collectionOfPlayers[i][key];
    console.log(collectionOfPlayers[i].name + ': ' + value);
    if (value > winner.total) {
      winner = collectionOfPlayers[i];
    }
  }
  console.log('The winner is ' + winner.name + '!');
}
findWinner(collectionOfPlayers, 'total');
