// создаем переменные для приветственного сообщения
var greeting = 'Привет, ';
var name = 'Катерина';
var message = '! Пожалуйста, проверьте заказ:';
// конкатенируем значения 3 переменных для формирования приветственного сообщения
var welcome = greeting + name + message;

// Создаем переменные в которых будет храниться подробная информация о табличке
var sign = 'Всемирная сеть';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// получаем элемент с id greeting
var el = document.getElementById('greeting');
el.textContent = welcome;

// получаем элемент с id userSign
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// получаем элемент с id tiles и обновляем его содержимое
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// получаем элемент с id subTotal и обновляем его содержимое
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + ' ₽';

// получаем элемент с id shipping и обновляем его содержимое
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping + ' ₽';

// получаем элемент с id grandTotal и обновляем его содержимое
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + ' ₽';


