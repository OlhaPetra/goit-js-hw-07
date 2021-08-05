
const allCategoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${allCategoriesEl.length} категории.`);


allCategoriesEl.forEach(categoriesEl => console.log(`Категория: ${categoriesEl.firstElementChild.textContent}
Количество элементов:${categoriesEl.lastElementChild.children.length}`));

