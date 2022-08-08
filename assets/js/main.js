//Buttons ansprechen

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

//Einsätze des Computers als Array, aus dem ein random Item zurückgegeben wird sobald User einen button klickt(seinen Einsatz spielt)
const stakes = ["rck", "ppr", "scsrs"];

//Counter ansetzen um die Punkte zu zählen (Comp vs User).
//Counter für generell gespielte runden.
let counterComp = 0;
let counterUser = 0;
let counterRounds = 0;

//Radiobuttons als Variable speichern
let roundChecker5 = document.getElementById("5");
let roundChecker10 = document.getElementById("10");
let roundChecker15 = document.getElementById("15");
let roundChecker20 = document.getElementById("20");

//Runden bei Anwählen des Radiobuttons festlegen. Gleichzeitig erst bei Klick auf Radiobutton, die spielbaren Buttons sichtbar.
let roundsToPlay = 0;

roundChecker5.addEventListener("click", () => {
  document.getElementById("buttons").style.display = "flex";
  roundsToPlay = 5;
});
roundChecker10.addEventListener("click", () => {
  document.getElementById("buttons").style.display = "flex";
  roundsToPlay = 10;
});
roundChecker15.addEventListener("click", () => {
  document.getElementById("buttons").style.display = "flex";
  roundsToPlay = 15;
});
roundChecker20.addEventListener("click", () => {
  document.getElementById("buttons").style.display = "flex";
  roundsToPlay = 20;
});

let roundChecker = document.getElementsByName("roundChecker");

// ========== OUTCOMES ==========

let outcomeWin =
  "OK, YOU WIN, PEASANT. But prepare for my devastating VENGANCE!";
let outcomeLoose = "YOU'RE DOOMED";
let outcomeDraw = "DRAAAAW!";

let outcome = () => {
  if (counterComp < counterUser) {
    document.getElementById("comment").innerHTML = outcomeWin;
  } else if (counterComp === counterUser) {
    document.getElementById("comment").innerHTML = outcomeDraw;
  } else if (counterComp > counterUser) {
    document.getElementById("comment").innerHTML = outcomeLoose;
  }
};

// ==================== ROCK ====================

function playRock() {
  let compStake = stakes[Math.floor(Math.random() * stakes.length)];
  counterRounds += 1;

  if (counterRounds < roundsToPlay) {
    if (compStake === "rck") {
      document.getElementById("comment").innerText = " meets Rock";
    } else if (compStake === "ppr") {
      document.getElementById("comment").innerText = "fails Paper";
      counterComp += 1;
      document.getElementById("compWin").innerHTML = counterComp;
    } else if (compStake === "scsrs") {
      document.getElementById("comment").innerText = "beats Scissors";
      counterUser += 1;
      document.getElementById("userWin").innerHTML = counterUser;
    }
  } else {
    outcome();
    document.getElementById("buttons").style.display = "none";
    document.getElementById("resetGame").style.fontSize = "40px";
    document.getElementById("comment").style.fontSize = "40px";
  }
}

rock.addEventListener("click", playRock);

// ==================== PAPER ====================

function playPaper() {
  let compStake = stakes[Math.floor(Math.random() * stakes.length)];
  counterRounds += 1;

  if (counterRounds < roundsToPlay) {
    if (compStake === "rck") {
      document.getElementById("comment").innerText = "beats Rock";
      counterUser += 1;
      document.getElementById("userWin").innerHTML = counterUser;
    } else if (compStake === "ppr") {
      document.getElementById("comment").innerText = "meets Paper";
    } else if (compStake === "scsrs") {
      document.getElementById("comment").innerText = "fails Scissors";
      counterComp += 1;
      document.getElementById("compWin").innerHTML = counterComp;
    }
  } else {
    outcome();
    document.getElementById("buttons").style.display = "none";
    document.getElementById("resetGame").style.fontSize = "40px";
    document.getElementById("comment").style.fontSize = "40px";
  }
}

paper.addEventListener("click", playPaper);

// ==================== SCISSORS ====================

function playScissors() {
  let compStake = stakes[Math.floor(Math.random() * stakes.length)];
  counterRounds += 1;

  if (counterRounds < roundsToPlay) {
    if (compStake === "rck") {
      document.getElementById("comment").innerText = "fails Rock";
      counterComp += 1;
      document.getElementById("compWin").innerHTML = counterComp;
    } else if (compStake === "ppr") {
      document.getElementById("comment").innerText = "beats Paper";
      counterUser += 1;
      document.getElementById("userWin").innerHTML = counterUser;
    } else if (compStake === "scsrs") {
      document.getElementById("comment").innerText = "meets Scissors";
    } else {
      outcome();
      document.getElementById("buttons").style.display = "none";
      document.getElementById("resetGame").style.fontSize = "40px";
      document.getElementById("comment").style.fontSize = "40px";
    }
  }
}
scissors.addEventListener("click", playScissors);

console.log(counterRounds);

//RESET

document.getElementById("resetGame").addEventListener("click", reset);

function reset() {
  counterComp.value = 0;
  counterUser.value = 0;
  counterRounds.value = 0;
}

// && counterComp > counterUser
// Funktion: user pressed button vergleich mit random wert d comp => 0/1

//Ausgabe der gewählten einsätze "X schlägt Y" in "#comment"

//punkte gut schreiben

// nach  "#5"/"#10" etc runden display: "win or loose"
