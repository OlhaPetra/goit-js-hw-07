const inputEl = document.getElementById("validation-input");
const maxInputText = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  if (event.target.value.length > maxInputText) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  } else if (event.target.value === "") {
    event.target.classList.remove("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
}
