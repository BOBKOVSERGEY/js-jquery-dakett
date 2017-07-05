var score = 75;
var msg = '';

function congratulate() {
  msg += 'Поздравляем!';
}

if (score >= 50) {
  congratulate();
  msg += 'Переходите к следующему этапу';
}

var el = document.getElementById('answer');

el.innerHTML = msg;