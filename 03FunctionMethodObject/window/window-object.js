var msg = '<h2>Окно браузера</h2> <p>Ширина:' + window.innerWidth + '</p>';
msg += '<p>высота: ' + window.innerHeight + '</p>';
msg += '<h2>История:</h2> <p>элементов: ' + window.history.length + '</p>';
msg += '<h2>Экран:</h2> <p>ширина: ' + window.screen.width + '</p>';
msg += '<p>высота: ' + window.screen.height + '</p>';

var el = document.getElementById('info');

el.innerHTML = msg;

alert('Текущая страница' + window.location);