// получаем второй элемент из списка
var itemTwo = document.getElementById('two');

// получаем его текстовое содержимое
var elText =  itemTwo.firstChild.nodeValue;
console.log(elText);

// меняем кедровые орешки на белокочанную капусту
elText = elText.replace('кедровые орешки','белокачанная капуста');
console.log(elText);
// обновляем элемент списка
itemTwo.firstChild.nodeValue = elText;