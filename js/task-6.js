const inputText = document.querySelector("#validation-input")

const validText = () => {
    
    if (inputText.value.length === Number(inputText.dataset.length)) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }
    else if (inputText.value.length > Number(inputText.dataset.length) || inputText.value.length < Number(inputText.dataset.length)) {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
}
 
inputText.addEventListener("change", validText)