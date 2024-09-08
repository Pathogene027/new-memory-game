const strtBn = document.querySelector("#strtBn");
const userInput = JSON.parse(localStorage.getItem("localData"));
const { themeKey, gridKey, playerKey } = userInput;
let moves = 0;
let turn = 0;
let interval = "";
let singleWin = "";
let hour = 0;
let minute = 0;
let second = 0;
const playerEff = document.querySelector(".player-effect");
const currentPlayer = document.querySelector(".player-effect")
  ? document.querySelector(".player-effect")
  : document.querySelector(".player-effect-multi");
const innerChildren = currentPlayer.children;
const rightSide = document.querySelector(".right-side");
const section = document.createElement("section");
