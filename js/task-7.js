const inputFSControl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

const changeFontSize = () => {
  inputText.style.fontSize = `${Number(inputFSControl.value)}px`;
};

inputFSControl.addEventListener('input', changeFontSize);