// var i = 1;
// var msg = '';
//
// while(i < 10) {
//   msg += i + 'x5 = ' +(i*5) + '<br>';
//   i++;
// }
//
// document.getElementById('answer').innerHTML = msg;

var table = 3;
var operation = 'addition';
var i = 1;
var msg = '';

if (operation === 'addition') {
  while (i < 11) {
    msg += i + '+' + table + '=' + (i+table) + '<br>';
    i++;
  }
} else {
  while (i < 11) {
    msg += i + 'x' + table + '=' + (i*table) + '<br>';
    i++;
  }
}

var el = document.getElementById('blackboard').innerHTML = msg;