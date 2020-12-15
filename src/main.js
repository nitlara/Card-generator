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

  //creamos una variable newSuit para almacenar el elemento de html que está indicado como id=suit.
  //mandamos a html el valor de suits[posición suit que es el valor aleatorio de los 4 suits que hemos hecho]

  var newSuit = document.getElementById("suit");
  newSuit.innerHTML = suits[suit].sign;

  //AÑADIR COLOR EN CLASS
  //var newSuit = document.getElementById("suit");
  //newSuit.innerHTML = suits[suit].color;

  var newSuit2 = document.getElementById("suit2");
  newSuit2.innerHTML = suits[suit].sign;

  var newcard = document.getElementById("number");
  newcard.innerHTML = numbers[number];
};
