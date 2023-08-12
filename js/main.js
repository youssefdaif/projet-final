const gameGrid = document.getElementById("gameGrid");
const moveButtons = document.querySelectorAll(".moveButton");
const scoreSpan = document.getElementById("score");
const restartButton = document.getElementById("restart");
const gameOverPopup = document.getElementById("gameOverPopup");
const finalScoreSpan = document.getElementById("final");

const largeur = 10;
const hauteur = 6;
let score = 0;
let grille = [];