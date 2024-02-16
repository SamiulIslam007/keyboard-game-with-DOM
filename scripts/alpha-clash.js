// function play() {
//   const homeScreen = document.getElementById("home-screen");
//   const playGround = document.getElementById("play-ground");

//   homeScreen.classList.add("hidden");
//   playGround.classList.remove("hidden");
// }

function keyPressButtonDetector(event) {
  const expectedAlphabet = event.key;
  const screenLetter = document.getElementById("screen-letter").innerText;

  if (event.key === "Escape") {
    gameOver();
  }

  if (expectedAlphabet === screenLetter) {
    // update the score

    const currentScore = getTextElementById("current-score");

    const newScore = currentScore + 1;

    setTextElementById("current-score", newScore);

    removeRandomBgColor(screenLetter);
    continuePlay();
  } else {
    // loose life
    const currentLife = getTextElementById("current-life");

    const newLife = currentLife - 1;

    setTextElementById("current-life", newLife);

    if (newLife === 0) {
      gameOver();
      removeRandomBgColor(screenLetter);
    }
  }
}

document.addEventListener("keyup", keyPressButtonDetector);

function continuePlay() {
  const alphabet = getARandomAlphabet();
  const screenLetter = document.getElementById("screen-letter");
  screenLetter.innerText = alphabet;

  setBgColorOfRandomLetter(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");

  hideElementById("score");

  // reset life and score
  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);

  continuePlay();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("score");

  // set the score
  const gameScore = getTextElementById("current-score");
  setTextElementById("final-score", gameScore);
}
