// кажется тут должен быть код...

// Подсказка №1: Содержимое тега textarea хранится в его свойстве value

// Подсказка №2: Не забывайте, что LocalStorage и SessionStorage могут хранить только строки в виде пар ключ/значение




let button = document.querySelector('.button');
button.onclick = function() {
    let txt = document.getElementById('text').value;
    localStorage.setItem('txt',txt);
    let p = document.createElement('p');
    p.innerText = txt;
    document.querySelector('.news__comment_add').after(p);
}