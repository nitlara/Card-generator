/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = ["spade", "club", "heart", "diamond"];
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

  let suit = Math.floor(Math.random() * suits.length - 1);
  let number = Math.floor(Math.random() * numbers.length - 1);

  var newSuit = document.getElementById("suit");
  newSuit.innerHTML = suits[suit];

  var newcard = document.getElementById("number");
  newcard.innerHTML = numbers[number];
};
