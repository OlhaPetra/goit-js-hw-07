const rangeInputEl = document.getElementById('font-size-control');
const spanTextEl = document.getElementById('text');

rangeInputEl.setAttribute('min', 0);
rangeInputEl.setAttribute('max', 32);
rangeInputEl.setAttribute('value', 16);

rangeInputEl.addEventListener('input', onRangeInput);

function onRangeInput(event) {
    const inputValue = event.target.value;
    spanTextEl.style.fontSize = `${inputValue}px`;
};
