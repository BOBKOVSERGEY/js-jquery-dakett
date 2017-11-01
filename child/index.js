// выделяем исхлдный элемент и находим его предки потомки
var startItem = document.getElementsByTagName('ul')[0];
console.log(startItem);
var firstItem = startItem.firstChild;
console.log(firstItem);
var lastItem = startItem.lastChild;
console.log(lastItem);

firstItem.className = 'complete';
lastItem.className = 'cool';
