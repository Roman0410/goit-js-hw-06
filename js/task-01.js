const arrayOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${arrayOfCategories.length}`);
const categoriesArray = [...arrayOfCategories]
  .map(
    (categories) => `Category: ${categories.querySelector("h2").textContent} 
        Elements: ${categories.querySelectorAll("li").length}`
  )

  .join("\n");

console.log(categoriesArray);
