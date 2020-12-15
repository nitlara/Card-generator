/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = ["spades", "hearts", "clubs", "diamonds"];
  //     {
  //       name: "spades",
  //       image:
  //         "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
  //     },
  //     {
  //       name: "hearts",
  //       image:
  //         "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
  //     },
  //     {
  //       name: "clubs",
  //       image:
  //         "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
  //     },
  //     {
  //       name: "diamonds",
  //       image:
  //         "https://w7.pngwing.com/pngs/667/791/png-transparent-playing-card-poker-suit-spades-gambling-ace-card-king-leaf-hearts.png"
  //     }
  //   ];

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
  newSuit.innerHTML = suits[suit];

  var newSuit2 = document.getElementById("suit2");
  newSuit2.innerHTML = suits[suit];

  var newcard = document.getElementById("number");
  newcard.innerHTML = numbers[number];
};
