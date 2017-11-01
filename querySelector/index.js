// метод querySelector возвращает только первое совпадение
var el = document.querySelector('li.hot');
el.className = 'cool';
console.log(el);

// метод querySelectorAll возвращает NodeList

var elements = document.querySelectorAll('li.hot');

elements[1].className = 'cool';

console.log(elements);

var elTest = document.querySelectorAll('li.test');

if (elTest.length > 0) {
  for (var i = 0; i < elTest.length; i++) {
    elTest[i].className = 'cool';
  }
}

console.log(elTest);
