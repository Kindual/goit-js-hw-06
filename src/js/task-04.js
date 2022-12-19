const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    }
}

const currentCounterValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', function () {
    counterValue.decrement();
    currentCounterValue.textContent = counterValue.value;
})

incrementButton.addEventListener('click', function () {
    counterValue.increment();
    currentCounterValue.textContent = counterValue.value;
})