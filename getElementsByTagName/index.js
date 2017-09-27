// находим элементы li
var elements = document.getElementsByTagName('li');

// если найдено 3 или более
if (elements.length > 0) {
  // выделяем 3 элемент из коллекции
  var el = elements[0];

  // изменяем значение атрибута class этого элемента
  el.className = 'cool';
}
console.log(el);