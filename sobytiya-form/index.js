// объявляем переменные
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;

// сохраняем элементы
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

// объявляем функцию
function packageHint() {
  // получаем выбранный вариант
  var package = this.options[this.selectedIndex].value;

  // если выбрана подписка на месяц
  if (package == 'monthly') {
    elPackageHint.innerHTML = 'Сэкономьте 100₽, оплатив подписку на год';
  } else {
    elPackageHint.innerHTML = 'Прекрасный выбор!';
  }
}

// объявляем функцию
function checkTerms(event) {
  // если флажок сброшен
  if (!elTerms.checked) {
    elTermsHint.innerHTML = 'Вы должны согласиться с условиями соглашения';
    event.preventDefault();
  }

}

elForm.addEventListener('submit', checkTerms, false);

elSelectPackage.addEventListener('change', packageHint, false);