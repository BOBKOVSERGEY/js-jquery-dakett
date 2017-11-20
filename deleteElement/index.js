//подгатавливваем элемент к удалению
var removeEl = document.getElementById('delete');

// определяем элемент содержащий данный объект
var containerEl = removeEl.parentNode;

// удаляем элемент

containerEl.removeChild(removeEl);