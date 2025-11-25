document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // required name
    const amount = getInputValueById("amount");

    const pin = getInputValueById("pin");

    const accountNumber = document.getElementById("account-number").value;

    const mainBalance = getInnerTextById("main-blance");
    const selectedBank = document.getElementById("all-bank").value;

    if (amount < 0) {
      alert("give +ve number");
      return;
    }
    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        // document.getElementById("main-blance").innerText = sum;
        setInnerTextByIdandValue("main-blance", sum);
        const transactionContainer = document.getElementById(
          "transaction-container"
        );
        // const p = document.createElement("p");
        // p.innerText = `
        // added ${amount} from ${accountNumber} account`;
        // transactionContainer.appendChild(p);

        const div = document.createElement("div");
        div.innerHTML = `
                <h1>Added balance from ${selectedBank}</h1>
        <h3>${amount}</h3>
        <p>account number: ${accountNumber}</p>`;
        transactionContainer.appendChild(div);
      } else {
        window.alert("pin thik nai");
      }
    } else {
      window.alert("number thik nai");
    }
  });
