document.getElementById("cash-out").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add-money", "block");
  handleToggle("cash-out", "none");
  handleToggle("transaction-history", "none");
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("cash-out", "block");
  handleToggle("add-money", "none");
  handleToggle("transaction-history", "none");
});

// toggle related function
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
