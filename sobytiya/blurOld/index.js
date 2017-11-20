var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');
function checkUsername(minLength) {

  if (elUsername.value.length < minLength) {
    elMsg.textContent = 'Ваше имя меньше '+ minLength +' букв';
  } else {
    elMsg.textContent = '';
  }
}

elUsername.addEventListener('blur', function () {
  checkUsername(6);
}, false)