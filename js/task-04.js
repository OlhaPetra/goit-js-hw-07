const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.getElementById("value");

incrementBtnEl.addEventListener("click", onIncrementBtnEl);
decrementBtnEl.addEventListener("click", onDecrementBtnEl);

function onIncrementBtnEl() {
  valueEl.textContent = Number(valueEl.textContent) + 1;
}

function onDecrementBtnEl() {
  valueEl.textContent = Number(valueEl.textContent) - 1;
}