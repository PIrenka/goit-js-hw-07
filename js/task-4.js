const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

const decrement = () => {
    counterValue.textContent = counterValue.textContent - 1;

}
const increment = () => {
    counterValue.textContent = + counterValue.textContent + 1;
}

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);