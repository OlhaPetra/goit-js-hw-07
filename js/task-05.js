const inputNameEl = document.getElementById('name-input');
const outputNameEl = document.getElementById('name-output');

inputNameEl.addEventListener('input', showName)

function showName(event) {
    event.preventDefault();

    if (inputNameEl.value === '') {
        outputNameEl.textContent = 'незнакомец';
    } else { outputNameEl.textContent = inputNameEl.value};
};


