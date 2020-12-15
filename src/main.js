/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = [
    {
      name: "spades",
      sign: "♠",
      code: "u+2660 ISOpub",
      color: "black",
      image:
        "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
    },
    {
      name: "hearts",
      sign: "♥",
      code: "u+2665 ISOpub",
      color: "red",
      image:
        "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
    },
    {
      name: "clubs",
      sign: "♣",
      code: "u+2663 ISOpub",
      color: "black",
      image:
        "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
    },
    {
      name: "diamonds",
      sign: "♦",
      code: "u+2666 ISOpub",
      color: "red",
      image:
        "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
    }
  ];

  let numbers = [
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
    "K"
  ];

  let suit = Math.floor(Math.random() * suits.length);
  let number = Math.floor(Math.random() * numbers.length);

  var newSuit = document.getElementById("suit");
  newSuit.classList.add(suits[suit].color);
  newSuit.innerHTML = suits[suit].sign;

  var newSuit2 = document.getElementById("suit2");
  newSuit2.classList.add(suits[suit].color);
  newSuit2.innerHTML = suits[suit].sign;

  var newcard = document.getElementById("number");
  newcard.innerHTML = numbers[number];
};
