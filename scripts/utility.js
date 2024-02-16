function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabetString.split("");
  const randomNumber = Math.round(Math.random() * 25);

  //   getting a random alphabet
  const randomAlphabet = alphabetArr[randomNumber];
  return randomAlphabet;
}
function removeRandomBgColor(element) {
  const randomLetter = document.getElementById(element);

  randomLetter.classList.remove("bg-orange-500");
}
function setBgColorOfRandomLetter(alphabet) {
  const randomLetter = document.getElementById(alphabet);

  randomLetter.classList.add("bg-orange-500");
}

function getTextElementById(element) {
  const currentScoreText = document.getElementById(element).innerText;
  const currentScore = parseInt(currentScoreText);
  return currentScore;
}

function setTextElementById(element, newScore) {
  document.getElementById(element).innerText = newScore;
}
