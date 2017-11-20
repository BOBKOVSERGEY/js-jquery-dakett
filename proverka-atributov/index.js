// проверка наличия атрибута и получение его значения
// выбираем элемент
var oneBlockEl = document.getElementById('blokOne');
// если у него есть атрибут класс
if (oneBlockEl.hasAttribute('class')) {
  var attr = oneBlockEl.getAttribute('class');

  var resultEl = document.getElementById('result');
  resultEl.innerHTML = '<p>У блока есть атрибут класс ' + attr + '</p>';
}

