const inputEl = document.getElementById('validation-input');

const maxInputText = inputEl.getAttribute('data-length');

inputEl.addEventListener('input', ()=> currentInputText = inputEl.value.length);

inputEl.addEventListener('focus', chekInputTextLength);

function chekInputTextLength(event) {
    event.preventDefault();

/*  if (cussrentInputText <= maxInputText) {
    inputEl.classList.add('valid')
    } else {inputEl.classList.add('invalid')} */
}

