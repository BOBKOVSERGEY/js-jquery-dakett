// получаем элемент
var elBtn = document.getElementById('btn');


elBtn.onclick = function () {
  var elOne = document.getElementById('one');

  // изменяем атрибут класс или добавляем его если не существует
  elOne.className = 'complete';
}

// получаем четвертый элемент списка
var fourItem = document.getElementsByTagName('li')[3];

fourItem.setAttribute('class', 'cool');

// получаем первый ul
var list = document.getElementsByTagName('ul')[0];

console.log(list);

// добавление нового элемента к концу списка
// создаем элемент
var newItemLast = document.createElement('li');

// создаем текстовый узел
var newTextLast = document.createTextNode('NewLast Lorem ipsum dolor sit amet.');

// добавляем текстовый узел к элементу
newItemLast.appendChild(newTextLast);

// добавляем элемент к концу списка

list.appendChild(newItemLast);

// Добавление нового элемента к началу списка
// создаем элемент
var newItemFirst = document.createElement('li');

// создаем тектовый узел
var newTextFirst = document.createTextNode('NewFirst Lorem ipsum dolor sit amet.')

// добавляем текстовый узел к элементу
newItemFirst.appendChild(newTextFirst);

// добавляем элемент к началу списка
list.insertBefore(newItemFirst, list.firstChild);

// выбираем все элементы li
var listItems = document.querySelectorAll('li');

//  добавляем класс coll ко всем элементам списка
var i;
for (i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// ДОБАВЛЯЕМ В ЗАГОЛОВОК ИНФЛРМВАЦИЮ О КОЛЛИЧЕСТВЕ ЭЛЕМЕНТОВ В СПИСКЕ
// выбираем заголовок
var heading = document.querySelector('h2');

// Сохраняем текст заголовка
var headingText = heading.firstChild.nodeValue;


// считаем колличество элементов в списке
var totalItems = listItems.length;

var newHeading = headingText + ' <span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
console.log(totalItems);


