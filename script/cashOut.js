document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = getInputValueById("cash-out-amount");
    const cashOutPin = getInputValueById("cash-out-pin");
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-blance");
    if (cashOutAmount > mainBalance) {
      alert("cash out amount must be less than main balance");
      return;
    }
    // return korar ortho thamia doa
    if (accountNumber.length === 11) {
      if (cashOutPin === 1234) {
        const sum = mainBalance - cashOutAmount;
        setInnerTextByIdandValue("main-blance", sum);

        const transactionContainer = document.getElementById(
          "transaction-container"
        );

        const p = document.createElement("p");
        p.innerText = `
        cashOut ${cashOutAmount} from this ${accountNumber} account`;
        transactionContainer.appendChild(p);
      } else {
        alert("pin is invalid");
      }
    } else {
      alert("account number invalid");
    }
  });
