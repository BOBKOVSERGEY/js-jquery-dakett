// находим элементы с классом hot
var elements = document.getElementsByClassName('hot');

// если найдено 3 или более
if (elements.length > 2) {
  // выделяем 3 элемент из коллекции
  var el = elements[2];

  // изменяем значение атрибута class этого элемента
  el.className = 'cool';
}
console.log(el);