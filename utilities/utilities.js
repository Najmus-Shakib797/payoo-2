// input field related function
function getInputValueById(id) {
  // universal name
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// innerText related function
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// innertext set related function
function setInnerTextByIdandValue(id, value) {
  document.getElementById(id).innerText = value;
}
// toggle related function
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
