const items = [...document.querySelectorAll('.item')];
console.log(items);
console.log(`В списке ${items.length} категории.`);

items.map(item => {
    const itemTitle = item.querySelector('h2');
    const itemList = item.querySelectorAll('ul li');
    return {
        itemTitle: itemTitle.textContent,
        count: itemList.length
    }
}).forEach(entry => { console.log(`Категория: `, entry.itemTitle, `\nКоличество элементов: `, entry.count) });