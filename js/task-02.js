const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

function createIngredientsItem(array) {
  const ingredientsList = document.getElementById("ingredients");

  const items = array.map((item) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.textContent = item;
    return ingredientsItem;
  });
  ingredientsList.append(...items);
  console.log(ingredientsList);

  return ingredientsList;
}

createIngredientsItem(ingredients);