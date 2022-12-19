const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elems = ingredients.map(el => {
  const liElem = document.createElement('li');
  liElem.textContent = `${el}`;
  liElem.classList.add('item');
  return liElem;
})

const listIngredients = document.getElementById('ingredients');
listIngredients.append(...elems);