const inputNameEl = document.getElementById("name-input");
const outputNameEl = document.getElementById("name-output");

inputNameEl.addEventListener("input", showName);

function showName(event) {
  if (event.target.value === "") {
    outputNameEl.textContent = "незнакомец";
  } else {
    outputNameEl.textContent = event.target.value;
  }
}
