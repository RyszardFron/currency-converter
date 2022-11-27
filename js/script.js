console.log("Cześć!");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-conversionAmount");
let resultElement = document.querySelector(".js-result");
let resetButton = document.querySelector(".js-reset");


let EUR = 4.7075;
let GBD = 5.4362;
let USD = 4.5844;
let CHF = 4.7977;
let UAH = 0.1258;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency = currencyElement.value;
  let amount = amountElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / EUR;
      break;
    case "GBD":
      result = amount / GBD;
      break;
    case "USD":
      result = amount / USD;
      break;
    case "CHF":
      result = amount / CHF;
      break;
    case "UAH":
      result = amount / UAH;
      break;
  }

  resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

});

resetButton.addEventListener("click", () => {
  resultElement.classList.toggle("reset");
  resultElement.innerText = "OTRZYMASZ";
})