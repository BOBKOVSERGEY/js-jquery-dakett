var el;
// объявляем функцию
function charCount(e) {
  // обявляем переменные
  var textEntered, charDisplay, counter, lastKey;

  // сохраняем пользовательский текст
  textEntered = document.getElementById('message').value;

  // сохраняем элемент счетчика
  charDisplay = document.getElementById('charactersLeft');

  // колличество оставшихся символов
  counter = (180 - (textEntered.length));

  // отображаем оставшиеся символы
  charDisplay.textContent = counter;

  // получение клавиши нажатой последней
  lastKey = document.getElementById('lastKey');
  // создаем сообщение
  lastKey.textContent = "Код последней нажатой клавиши" + e.keyCode;
}

el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);