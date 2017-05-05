var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = quantity * price;

var el = document.getElementById('cost');
el.textContent = total + ' ₽';
