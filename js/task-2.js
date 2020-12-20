const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients'); 
const ingredientsItems = ingredients.map(item => { 
  const items = document.createElement('li');
   items.textContent = item;
  return items;
});
listIngredients.append(...ingredientsItems);
console.log(listIngredients);
