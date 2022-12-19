const nameToGreeting = document.querySelector('#name-input');
const formForName = document.querySelector('#name-output');

nameToGreeting.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.dir(event.currentTarget);
    event.currentTarget.value.length == 0
        ? formForName.textContent = 'Anonymous'
        : formForName.textContent = event.currentTarget.value;
}