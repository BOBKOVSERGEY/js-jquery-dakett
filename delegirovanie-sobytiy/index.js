
function setup() {
  var textInput;
  textInput = document.getElementById('login');
  textInput.focus();
}

window.addEventListener('load', setup, false);










function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {
  var target, elParent, elGrandparent;

  target = getTarget(e); // получаем ссылку того элемента по которому был сделан щелчек
  elParent = target.parentNode; // получаем соответсвующий элемент из этого списка
  elGrandparent = target.parentNode.parentNode; // получаем соответсвующий список
  elGrandparent.removeChild(elParent); // удаляем элемент из списка

  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

// создаем слушатели событий для вызова функции itemDone() при щелчке
var el = document.getElementById('shoppingList');

if (el.addEventListener) {
  el.addEventListener('click', function (e) {
    itemDone(e);
  }, false);
} else {
  el.attachEvent('onclick', function (e) {
    itemDone(e);
  });
}

