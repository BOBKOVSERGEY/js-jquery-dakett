var msg = '<p><strong>Заголовок страницы:</strong></p> ' + document.title;
msg += '<p><strong>Адрес страницы:</strong></p> ' + document.URL;
msg += '<p><strong>Дата изменения:</strong></p>' + document.lastModified;

var el = document.getElementById('footer');

el.innerHTML = msg;
