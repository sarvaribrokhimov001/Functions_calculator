alert("Assalomu alaykum");
alert("Dasturimizga xush kelibsiz!");
alert("Bu yerda siz tekin kalkulyator ishlatishingiz mumkin");
const num1 = document.querySelector(".inputNum1");
const num2 = document.querySelector(".inputNum2");
const answer = document.querySelector(".answer");

const plus = document.querySelector(".button_1");
const minus = document.querySelector(".button_2");
const mult = document.querySelector(".button_3");
const div = document.querySelector(".button_4");
const mod = document.querySelector(".button_5");

plus.addEventListener("click", () => {
  answer.textContent = Number(num1.value) + Number(num2.value);
});

minus.addEventListener("click", () => {
  answer.textContent = Number(num1.value) - Number(num2.value);
});

mult.addEventListener("click", () => {
  answer.textContent = Number(num1.value) * Number(num2.value);
});

div.addEventListener("click", () => {
  if (Number(num2.value) === 0) {
    answer.textContent = "Nolga bo‘lish mumkin emas!";
  } else {
    answer.textContent = Number(num1.value) / Number(num2.value);
  }
});

mod.addEventListener("click", () => {
  answer.textContent = Number(num1.value) % Number(num2.value);
});