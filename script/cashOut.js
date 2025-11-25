document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = getInputValueById("cash-out-amount");
    const cashOutPin = getInputValueById("cash-out-pin");
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-blance");
    if (accountNumber.length === 11) {
      if (cashOutPin === 1234) {
        const sum = mainBalance - cashOutAmount;
        setInnerTextByIdandValue("main-blance", sum);
      } else {
        alert("pin is invalid");
      }
    } else {
      alert("account number invalid");
    }
  });
