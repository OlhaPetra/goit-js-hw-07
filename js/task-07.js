const rangeInputEl = document.getElementById("font-size-control");
const spanTextEl = document.getElementById("text");

rangeInputEl.addEventListener("input", onRangeInput);

function onRangeInput() {
  spanTextEl.setAttribute("style", `font-size: ${rangeInputEl.value}px`);
};
