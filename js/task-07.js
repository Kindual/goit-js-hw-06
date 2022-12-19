const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputEl.addEventListener('input', changeFont);

function changeFont () {
    textEl.style.fontSize = `${this.value}px`;
}
