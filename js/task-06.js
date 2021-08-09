const inputEl = document.getElementById("validation-input");
const maxInputText = inputEl.getAttribute("data-length");
console.log(maxInputText)
console.log(typeof maxInputText)

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  if (event.target.value.length === Number(maxInputText)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
   
  } else if (event.target.value === "") {
    event.target.classList.remove("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
}
