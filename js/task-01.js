//Посчитает и выведет в консоль количество категорий в ul#categories

const allCategoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${allCategoriesEl.length} категории.`);

//Для каждого элемента в списке найдет и выведет в консоль текст заголовка элемента и количество элементов в категории

allCategoriesEl.forEach(categoriesEl => console.log(`Категория: ${categoriesEl.firstElementChild.textContent}
Количество элементов:${categoriesEl.lastElementChild.children.length}`));

