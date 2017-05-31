var saying = "Дом милий дом ";
var msg = '<h2>Длина</h2><p>' + saying.length + '</p>';
msg += '<h2>Прописные</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>Строчные</h2><p>' + saying.toLowerCase() + '</p>';
msg += '<h2>Символ с индексом 11</h2><p>' + saying.charAt(11) + '</p>';
msg += '<h2>Первое вхождение "ми"</h2><p>' + saying.indexOf('ми') + '</p>';
msg += '<h2>Последнее вхождение "м"</h2><p>' + saying.lastIndexOf('м') + '</p>';
msg += '<h2>Символы с индексами 6-12</h2><p>' + saying.substring(6,12) + '</p>';
msg += '<h2>Замена символов</h2><p>' + saying.replace('м','г') + '</p>';


var elInfo = document.getElementById('info');
elInfo.innerHTML = msg;