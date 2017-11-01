// Создаем новый элемент и сохраняем его в переменной.
var newEl = document.createElement('div');

// создаем текстовый узел и сохраняем его в переменной
var newText = document.createTextNode('lipsum');

// прикрепляем новый текстовый узел к новому элементу
newEl.appendChild(newText);

// находим позицию, на которую должен быть поставлен новый элемент
var position = document.getElementById('content');

// ставим новый элемент на эту позицию
position.appendChild(newEl);