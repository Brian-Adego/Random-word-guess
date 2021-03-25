const textElement = document.querySelector(".text");
const form = document.querySelector(".form");
const inputElement = document.querySelector("input");
const resultContainer = document.querySelector(".result-container");
const resultContainerText = document.querySelector(".result-container .text");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

inputElement.addEventListener("keyup", () => {
  createRandomNumber();
});

function createRandomNumber() {
  const randomNumber = Math.floor(Math.random() * numbers.length);
  if (parseInt(inputElement.value) === randomNumber) {
    checkStatus("Yaay!! You found: " + randomNumber, "correct");
  } else {
    checkStatus("Wrong, the number is: " + randomNumber, "danger");
  }
}

function checkStatus(text, action) {
  resultContainer.textContent = text;
  resultContainer.classList.add(`${action}`);
}
