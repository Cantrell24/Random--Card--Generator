/*eslint-disable*/
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generalRandomNumber();
  setTimeout(() => {}, 1000);
};
function generalRandomNumber() {
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
  let randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}
const generateRandomSuit = () => {
  let suit = ["spades", "diamond", "heart", "club"];
  let randomIndex = Math.floor(Math.random() * suit.length);
  return suit[randomIndex];
};
