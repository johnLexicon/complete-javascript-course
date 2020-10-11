/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, currents, dice, activePlayer, gamePlaying;

var pnlPlayers, lblScores, lblCurrents, btnHold, btnRollDice, imgDice;

btnRollDice = document.querySelector(".btn-roll");
btnHold = document.querySelector(".btn-hold");
lblCurrents = [document.querySelector("#current-0"), document.querySelector("#current-1")];
lblScores = [document.querySelector("#score-0"), document.querySelector("#score-1")];
pnlPlayers = [document.querySelector(".player-0-panel"), document.querySelector(".player-1-panel")];
imgDice = document.querySelector(".dice");

btnRollDice.addEventListener("click", onRollDice);
btnHold.addEventListener("click", hold);
document.querySelector(".btn-new").addEventListener("click", start);

function hold() {
  if (!gamePlaying) {
    return;
  }
  imgDice.style.display = "none";
  scores[activePlayer] += currents[activePlayer];
  lblScores[activePlayer].innerHTML = scores[activePlayer];

  currents[activePlayer] = 0;
  lblCurrents[activePlayer].innerHTML = 0;

  if (scores[activePlayer] >= 20) {
    end();
    return;
  }

  pnlPlayers[0].classList.toggle("active");
  pnlPlayers[1].classList.toggle("active");

  activePlayer = activePlayer === 0 ? 1 : 0;
}

function onRollDice() {
  if (!gamePlaying) {
    return;
  }
  dice = Math.floor(Math.random() * 6) + 1;
  imgDice.src = `dice-${dice}.png`;
  imgDice.style.display = "block";
  if (dice === 1) {
    currents[activePlayer] = 0;
    hold();
    return;
  }
  currents[activePlayer] += dice;
  lblCurrents[activePlayer].innerHTML = currents[activePlayer];
}

function end() {
  gamePlaying = false;
  pnlPlayers[activePlayer].classList.add("winner");
  pnlPlayers[activePlayer].querySelector(".player-name").textContent = "Winner!";
}

function start() {
  gamePlaying = true;
  imgDice.style.display = "none";
  [lblCurrents[0].innerHTML, lblCurrents[1].innerHTML] = [0, 0];
  [lblScores[0].innerHTML, lblScores[1].innerHTML] = [0, 0];
  scores = [0, 0];
  currents = [0, 0];

  pnlPlayers[0].classList.remove("winner");
  pnlPlayers[0].querySelector(".player-name").textContent = "Player 1";
  pnlPlayers[1].classList.remove("winner");
  pnlPlayers[1].querySelector(".player-name").textContent = "Player 2";

  if (pnlPlayers[0].classList.contains("active")) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
}

start();
