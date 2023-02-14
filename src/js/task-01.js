const arrayOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${arrayOfCategories.length}`);
const categoriesArray = [...arrayOfCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent} 
        Elements: ${categories.children[1].children.length}`
  )

  .join("\n");

console.log(categoriesArray);
