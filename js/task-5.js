const inputName = document.querySelector('#name-input');
const inputSpan = document.querySelector('#name-output');
inputName.addEventListener('input', inputText)
function inputText(event) {  

    if (event.target.value === '') {
        inputSpan.textContent = 'незнакомец'
    } else { inputSpan.textContent = event.target.value } 
 }