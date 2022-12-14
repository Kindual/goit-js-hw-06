function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector('#controls');
controlsEl.insertAdjacentHTML("beforeend", '<button type="button" data-clear>Clear box size</button>');

const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const btnClearEl = document.querySelector('[data-clear]');
const boxEls = document.querySelector('#boxes');
console.log(inputEl);

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyEverything);
btnClearEl.addEventListener('click', clearBoxSize);

let boxSize = 30;
function createBoxes(event) {
  const boxElements = [];

  if (event) {
    for (let index = 0; index < inputEl.value; index += 1) {
      const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};"></div>`;

      boxElements.push(box);
      boxSize += 10;
    }
  }
  boxEls.insertAdjacentHTML('beforeend', boxElements.join(''));
}

function destroyEverything() {
  boxEls.innerHTML = '';
}

function clearBoxSize() {
  boxSize = 30;
}


// inputEl.value = '';

{/* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div> */}