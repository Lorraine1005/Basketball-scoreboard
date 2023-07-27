let score = 0;
let awayScore = 0;
let scoreEl = document.getElementById("score-el");
let awayScoreEl = document.getElementById("away-score-el");

function add1() {
  score += 1;
  scoreEl.textContent = score;
}
function add2() {
  score += 2;
  scoreEl.textContent = score;
}
function add3() {
  score += 3;
  scoreEl.textContent = score;
}
// Away team scoreboard
function awayAdd1() {
  awayScore += 1;
  awayScoreEl.textContent = awayScore;
}
function awayAdd2() {
  awayScore += 2;
  awayScoreEl.textContent = awayScore;
}
function awayAdd3() {
  awayScore += 3;
  awayScoreEl.textContent = awayScore;
}
function gameReset() {
  score = 0;
  awayScore = 0;
  scoreEl.textContent = score;
  awayScoreEl.textContent = awayScore;
}
