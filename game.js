var shoot = [
  "ROCK",
  "PAPER",
  "SCISSORS"
];

var yourHand;

var randomShoot = shoot[Math.floor(Math.random() * shoot.length)];

function pickHand() {
  var yourHand = prompt("What do you choose? Rock, paper, or scissors?").toUpperCase();

  var win = "<h2> YOU WIN!</h2> <br><p>You chose " + yourHand + " and the computer had " + randomShoot + "! " + "<br>" + yourHand + " beats " + randomShoot + "! </p>";

  var lose = "<h2> YOU LOSE!</h2><br><p>You chose " + yourHand + " and the computer had " + randomShoot + "! " + "<br>" + randomShoot + " beats " + yourHand + "! </p>";

  if (yourHand === randomShoot) {
    document.write("<h2>IT WAS A DRAW!</h2><br><p>You  chose " + yourHand + " and the computer chose " + randomShoot + "!<br> Please reload the page to try again.</p>")
  } else if (randomShoot === "ROCK" && yourHand === "PAPER") {
    document.write(win)
  } else if (randomShoot === "ROCK" && yourHand === "SCISSORS") {
    document.write(lose)
  } else if (randomShoot === "PAPER" && yourHand === "ROCK") {
    document.write(lose)
  } else if (randomShoot === "PAPER" && yourHand === "SCISSORS") {
    document.write(win)
  } else if (randomShoot === "SCISSORS" && yourHand === "ROCK") {
    document.write(win)
  } else if (randomShoot === "SCISSORS" && yourHand === "PAPER") {
    document.write(lose)
  } else if (yourHand !== shoot) {
    alert("Sorry, that was an invalid entry. Please pick rock, paper, or scissors.");
    pickHand()
  }
}

pickHand();

//var yourHand = yourHand.toUpperCase();

/*if (yourHand !== "ROCK" || "PAPER" || "SCISSORS") {
  yourHand = prompt("What do you choose? Rock, paper, or scissors? 2");
  yourHand = yourHand.toUpperCase();
}*/



/*if (yourHand !== shoot) {
  yourHand = prompt("Sorry, that was an invalid entry. Please pick one: rock, paper, scissors.").toUpperCase();
}

if (yourHand === randomShoot) {
  document.write("You  chose " + yourHand + " and the computer chose " + randomShoot + "! It was a draw! Please reload the page to try again.")
} else if (randomShoot === "ROCK" && yourHand === "PAPER") {
  document.write(win)
} else if (randomShoot === "ROCK" && yourHand === "SCISSORS") {
  document.write(lose)
} else if (randomShoot === "PAPER" && yourHand === "ROCK") {
  document.write(lose)
} else if (randomShoot === "PAPER" && yourHand === "SCISSORS") {
  document.write(win)
} else if (randomShoot === "SCISSORS" && yourHand === "ROCK") {
  document.write(win)
} else if (randomShoot === "SCISSORS" && yourHand === "PAPER") {
  document.write(lose)
} else {
  alert("That was an invalid entry. Please reload the page and try again.")
*/
