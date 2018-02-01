// Элемент для записи значения screenX
var sx = document.getElementById('sx');

// Элемент для записи значения screenY
var sy = document.getElementById('sy');

// Элемент для записи значения pageX
var px = document.getElementById('px');

// Элемент для записи значения pageY
var py = document.getElementById('py');

// Элемент для записи значения clientX
var cx = document.getElementById('cx');

// Элемент для записи значения clientY
var cy = document.getElementById('cy');

// объявляем функцию
function showPosition(event) {
  // обновляем элемент, используя значение screenX
  sx.value = event.screenX;
  // обновляем элемент, используя значение screenY
  sy.value = event.screenY;

  // обновляем элемент, используя значение pageX
  px.value = event.pageX;
  // обновляем элемент, используя значение pageY
  py.value = event.pageY;

  // обновляем элемент, используя значение clientX
  cx.value = event.clientX;
  // обновляем элемент, используя значение clientY
  cy.value = event.clientY;
}

// получаем элемент body
var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);