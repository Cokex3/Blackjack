// 0 = wager phase, 1 = startgame (shuffle and deal cards), 1 = hit or stand ,
state = 0;
playerMoney = 100;
playerHand = [];
playerCurrentCards = "";
playerScore = "";
dealerHand = [];
dealerCurrentCards = "";
dealerScore = "";
shuffledDeck = [];
wagerAmount = 0;
deck = [];
var main = function (input) {
  input = Number(input);
  if (state == 0) {
    if (playerMoney <= 0) {
      return `You have no more money... <br> Try refreshing to reset your money to $100`;
    }
    if (isNaN(input) == true || input <= 0) {
      return `Please enter your wager amount. <br> You currently have: $${playerMoney}`;
    }
    if (input > playerMoney) {
      return `You do not have enough money. <br> You currently have: $${playerMoney}`;
    }
    if (isNaN(input) == false && input > 0) {
      wagerAmount = input;
      state = 1;
      return `You have wagered $${wagerAmount}.<br> You currently have: $${playerMoney}. <br> Press <b>Start</b> to start the game!`;
    }
  }
  if (state == 1) {
    playerHand = [];
    playerCurrentCards = "";
    playerScore = "";
    dealerHand = [];
    dealerCurrentCards = "";
    dealerScore = "";
    shuffledDeck = [];
    deck = [
      {
        name: "A",
        suit: "♥",
        rank: 11,
      },
      {
        name: "2",
        suit: "♥",
        rank: 2,
      },
      {
        name: "3",
        suit: "♥",
        rank: 3,
      },
      {
        name: "4",
        suit: "♥",
        rank: 4,
      },
      {
        name: "5",
        suit: "♥",
        rank: 5,
      },
      {
        name: "6",
        suit: "♥",
        rank: 6,
      },
      {
        name: "7",
        suit: "♥",
        rank: 7,
      },
      {
        name: "8",
        suit: "♥",
        rank: 8,
      },
      {
        name: "9",
        suit: "♥",
        rank: 9,
      },
      {
        name: "10",
        suit: "♥",
        rank: 10,
      },
      {
        name: "J",
        suit: "♥",
        rank: 10,
      },
      {
        name: "Q",
        suit: "♥",
        rank: 10,
      },
      {
        name: "K",
        suit: "♥",
        rank: 10,
      },
      {
        name: "A",
        suit: "♦",
        rank: 11,
      },
      {
        name: "2",
        suit: "♦",
        rank: 2,
      },
      {
        name: "3",
        suit: "♦",
        rank: 3,
      },
      {
        name: "4",
        suit: "♦",
        rank: 4,
      },
      {
        name: "5",
        suit: "♦",
        rank: 5,
      },
      {
        name: "6",
        suit: "♦",
        rank: 6,
      },
      {
        name: "7",
        suit: "♦",
        rank: 7,
      },
      {
        name: "8",
        suit: "♦",
        rank: 8,
      },
      {
        name: "9",
        suit: "♦",
        rank: 9,
      },
      {
        name: "10",
        suit: "♦",
        rank: 10,
      },
      {
        name: "J",
        suit: "♦",
        rank: 10,
      },
      {
        name: "Q",
        suit: "♦",
        rank: 10,
      },
      {
        name: "K",
        suit: "♦",
        rank: 10,
      },
      {
        name: "A",
        suit: "♣",
        rank: 11,
      },
      {
        name: "2",
        suit: "♣",
        rank: 2,
      },
      {
        name: "3",
        suit: "♣",
        rank: 3,
      },
      {
        name: "4",
        suit: "♣",
        rank: 4,
      },
      {
        name: "5",
        suit: "♣",
        rank: 5,
      },
      {
        name: "6",
        suit: "♣",
        rank: 6,
      },
      {
        name: "7",
        suit: "♣",
        rank: 7,
      },
      {
        name: "8",
        suit: "♣",
        rank: 8,
      },
      {
        name: "9",
        suit: "♣",
        rank: 9,
      },
      {
        name: "10",
        suit: "♣",
        rank: 10,
      },
      {
        name: "J",
        suit: "♣",
        rank: 10,
      },
      {
        name: "Q",
        suit: "♣",
        rank: 10,
      },
      {
        name: "K",
        suit: "♣",
        rank: 10,
      },
      {
        name: "A",
        suit: "♠",
        rank: 11,
      },
      {
        name: "2",
        suit: "♠",
        rank: 2,
      },
      {
        name: "3",
        suit: "♠",
        rank: 3,
      },
      {
        name: "4",
        suit: "♠",
        rank: 4,
      },
      {
        name: "5",
        suit: "♠",
        rank: 5,
      },
      {
        name: "6",
        suit: "♠",
        rank: 6,
      },
      {
        name: "7",
        suit: "♠",
        rank: 7,
      },
      {
        name: "8",
        suit: "♠",
        rank: 8,
      },
      {
        name: "9",
        suit: "♠",
        rank: 9,
      },
      {
        name: "10",
        suit: "♠",
        rank: 10,
      },
      {
        name: "J",
        suit: "♠",
        rank: 10,
      },
      {
        name: "Q",
        suit: "♠",
        rank: 10,
      },
      {
        name: "K",
        suit: "♠",
        rank: 10,
      },
    ];

    return gamestart(input);
  }
  return ` Cards Delt! <br> Your cards are : ${playerCurrentCards} <br> Your score is ${playerScore}. <br><br> The Dealer's cards are: ${dealerCurrentCards}<br><br> Hit or Stand?`;
};

var handOutput = function (hand) {
  var output = hand[0].name + hand[0].suit;
  for (var i = 1; i < hand.length; i += 1) {
    output = output + ", " + hand[i].name + hand[i].suit;
  }
  return output;
};

var dealerHandOutput = function () {
  var output = dealerHand[0].name + dealerHand[0].suit;
  for (var i = 1; i < dealerHand.length; i += 1) {
    output = output + ", ?";
  }
  return output;
};

var scoreCalculation = function (hand) {
  score = 0;

  for (var i = 0; i < hand.length; i += 1) {
    score = score + Number(hand[i].rank);
  }
  for (var j = 0; j < hand.length; j += 1) {
    if (hand[j].name == "A") {
      if (score > 21) {
        score = score - 10;
      }
    }
  }

  return score;
};

var gamestart = function () {
  shuffledDeck = shuffleCards(deck);
  console.log(deck);
  playerHand = shuffledDeck.splice(0, 2);
  //playerHand = [{ name: "A", suit: "♠", rank: 11 },{ name: "K", suit: "♠", rank: 10 },];
  dealerHand = shuffledDeck.splice(0, 2);
  //dealerHand = [{ name: "A", suit: "♥", rank: 11 },{ name: "K", suit: "♥", rank: 10 }];
  //console.log(playerHand);
  //console.log(dealerHand);
  console.log(deck);
  playerCurrentCards = handOutput(playerHand);
  playerScore = scoreCalculation(playerHand);
  dealerCurrentCards = dealerHandOutput();
  state = 2;
  if (playerScore == 21) {
    dealerScore = scoreCalculation(dealerHand);
    dealerCurrentCards = handOutput(dealerHand);
    state = 0;

    if (dealerScore == 21) {
      return `<b>Both you and dealer got Blackjack!♠♠♠ <br> It's a tie! </b> <br> Your cards are : ${playerCurrentCards} <br> Your score is ${playerScore}. 
      <br><br> The Dealer's cards are ${dealerCurrentCards} <br><br> Press <b>Start</b> to play again! <br> You currently have: $${playerMoney}`;
    }
    playerMoney = playerMoney + wagerAmount;
    return `<b>Blackjack!♠♠♠ </b><br> Your cards are : ${playerCurrentCards} <br> Your score is ${playerScore}. <br><br> The Dealer's cards are: ${dealerCurrentCards}
    <br><br> You wagered $${wagerAmount}. <br> You currently have: $${playerMoney} <br><br> Press <b>Start</b> to play again!`;
  }

  return ` Cards Delt! <br> Your cards are : ${playerCurrentCards} <br> Your score is ${playerScore}. <br><br> The Dealer's cards are: ${dealerCurrentCards}<br><br> Hit or Stand?`;
};

var hit = function (input) {
  if (state == 2) {
    playerHand.push(shuffledDeck.shift());
    playerCurrentCards = handOutput(playerHand);
    playerScore = scoreCalculation(playerHand);
    console.log(playerHand);
    if (playerScore > 21) {
      return stand();
    }

    return ` Cards Delt! <br> Your cards are : ${playerCurrentCards} <br> Your score is ${playerScore}. <br><br> The Dealer's cards are: ${dealerCurrentCards}<br><br> Hit or Stand?`;
  }
  return `Press Start to start the game`;
};

var stand = function (input) {
  dealerScore = scoreCalculation(dealerHand);
  while (dealerScore < 17) {
    dealerHand.push(shuffledDeck.shift());
    dealerScore = scoreCalculation(dealerHand);
  }
  dealerCurrentCards = handOutput(dealerHand);

  var results = getResults(playerScore, dealerScore);
  state = 0;
  return `<b>${results}</b> <br> Your cards are : ${playerCurrentCards} <br> Your score is ${playerScore}. <br><br> The Dealer's cards are: ${dealerCurrentCards}
  <br> Dealer's score is ${dealerScore} <br> <br> You wagered $${wagerAmount}. <br> You currently have: $${playerMoney} <br><br> Press <b>Start</b> to play again!`;
};

var getResults = function (playerScore, dealerScore) {
  if (playerScore > dealerScore && playerScore <= 21 && dealerScore <= 21) {
    playerMoney = playerMoney + wagerAmount;
    return `Player Wins!`;
  }
  if (playerScore < dealerScore && playerScore <= 21 && dealerScore <= 21) {
    playerMoney = playerMoney - wagerAmount;
    return `Dealer Wins!`;
  }
  if (playerScore <= 21 && dealerScore > 21) {
    playerMoney = playerMoney + wagerAmount;
    return `Dealer Busted! Player Wins! `;
  }
  if (playerScore > 21 && dealerScore <= 21) {
    playerMoney = playerMoney - wagerAmount;
    return `You Busted! Dealer Wins!`;
  }
  if (playerScore > 21 && dealerScore > 21) {
    return `You and the Dealer busted! It's a tie!`;
  }

  if (playerScore == dealerScore) {
    return `It's a tie!`;
  }
};

var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};
