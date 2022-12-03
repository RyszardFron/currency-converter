{
  const calculateResult = (amount, currency) => {

    const rateEUR = 4.7075;
    const rateGBD = 5.4362;
    const rateUSD = 4.5844;
    const rateCHF = 4.7977;
    const rateUAH = 0.1258;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "GBD":
        return amount / rateGBD;

      case "USD":
        return amount / rateUSD;

      case "CHF":
        return amount / rateCHF;

      case "UAH":
        return amount / rateUAH;
    }
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();


      const currencyElement = document.querySelector(".js-currency");
      const amountElement = document.querySelector(".js-conversionAmount");

      const amount = +amountElement.value;
      const currency = currencyElement.value;

      const result = calculateResult(amount, currency);

      resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

    });
    
    const resetButton = document.querySelector(".js-reset");
    const resultElement = document.querySelector(".js-result");
    resetButton.addEventListener("click", () => {
      resultElement.classList.toggle("js-reset");
      resultElement.innerText = "OTRZYMASZ";
    });
  }

  init();
};