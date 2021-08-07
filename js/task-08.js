const inputEl = document.querySelector('[type="number"]');
const createButtonEl = document.querySelector('[data-action="render"]');
const clearButtonEl = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById("boxes");

inputEl.addEventListener("input", getAmount);
createButtonEl.addEventListener("click", createBoxes);
clearButtonEl.addEventListener("click", destroyBoxes);

function getAmount(event) {
  const inputValue = Number(event.currentTarget.value);
  event.target.setAttribute("counter", inputValue);
}

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

let firstBoxSize = 30;

function createBoxes() {
  let amount = Number(inputEl.getAttribute("counter"));
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= amount; i++) {
    firstBoxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.cssText = `width: ${firstBoxSize}px; height: ${firstBoxSize}px; margin: 5px; background-color: rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    fragment.append(newBox);
  }

  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  firstBoxSize = 30;
}
