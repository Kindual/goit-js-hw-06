
function amountCategories() {
    return console.log('Number of categories:', document.querySelectorAll('#categories .item').length) && console.log(' ');
}
amountCategories()


function infoCategories() {
    const liElems = document.querySelectorAll('#categories .item');
    
    liElems.forEach(el => {
        console.log('Category:', el.querySelector('h2').textContent);
        console.log('Elements:', el.querySelectorAll('li').length);
        console.log(' ')
    })
    
}

infoCategories()

// ще можна все це зробити через массив обьектів :)
console.log('-------------------------------------')

function infoCategoriesTwo() {
    const liElems = document.querySelectorAll('#categories .item');
        
    const objList = [];
    for (const i of liElems) {
        const item = {};
        item.category = i.querySelector('h2').textContent;
        item.value = i.querySelectorAll('li').length;
    
        objList.push(item);
    }
    
    return objList.forEach(el => {
        console.log('Category:', el.category);
        console.log('Elements:', el.value);
        console.log(' ')
    }) && objList;
}

infoCategoriesTwo()