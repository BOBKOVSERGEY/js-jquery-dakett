var msg = '<div class="header"><a id="close" href="#">&times;</a></div>';
msg += '<div><h2>Техническое обслуживание</h2>';
msg += 'С 12 до 13 часов на сервере производится техническое обслуживанеи';
msg += 'Во время работы могут происходить незначительные сбои в работе сайта</div>';

// создаем новый элемент
var elNote = document.createElement('div');

// добавляем id объявления
elNote.setAttribute('id', 'note');

// добавляем сообщение
elNote.innerHTML = msg;

// записываем его на страницу
document.body.appendChild(elNote);

// объявляем функцию
function dismissNote() {
  document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');

elClose.addEventListener('click', function (e) {
  e.preventDefault();
  dismissNote();
});