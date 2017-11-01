// выбираем исходный элемент и находим элементы смежные с ними
var startItem = document.getElementById('two');
console.log(startItem);
var prevItem = startItem.previousSibling;
console.log(prevItem);
var nextItem = startItem.nextSibling;
console.log(nextItem);

prevItem.className = 'complete';
nextItem.className = 'cool';
