document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // required name
    const amount = getInputValueById("amount");

    const pin = getInputValueById("pin");

    const accountNumber = document.getElementById("account-number").value;

    const mainBalance = getInnerTextById("main-blance");
    console.log(mainBalance);
    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        // document.getElementById("main-blance").innerText = sum;
        setInnerTextByIdandValue("main-blance", sum);
        const transactionContainer = document.getElementById(
          "transaction-container"
        );
        const p = document.createElement("p");
        p.innerText = `
        added ${amount} from ${accountNumber} account`;
        transactionContainer.appendChild(p);
      } else {
        window.alert("pin thik nai");
      }
    } else {
      window.alert("number thik nai");
    }
  });
