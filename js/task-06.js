const inputEl = document.getElementById("validation-input");
const maxInputText = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onBlur);

function onBlur() {
  if (inputEl.value.length > maxInputText) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else if (inputEl.value === "") {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
};