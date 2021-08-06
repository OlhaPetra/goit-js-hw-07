const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

//для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients

function createIngredientsItem(array) {
    
const ingredientsList = document.getElementById("ingredients");

const items = array.map((item) => {
        const ingredientsItem = document.createElement("li");
        ingredientsItem.textContent = item;
        return ingredientsItem;
})
    
    ingredientsList.append(...items);
    console.log(ingredientsList)
    
    return ingredientsList
}

createIngredientsItem(ingredients);








