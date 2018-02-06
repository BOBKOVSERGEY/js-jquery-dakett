function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false); // DOMContentLoaded срабатывает раньше чем load
window.addEventListener('beforeunload', function (event) {
  var message = 'Вы ввели данные, которые не будут сохранены';
  (event || window.event).returnValue = message;
  return message;
})