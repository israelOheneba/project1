var button = document.getElementById('button');
var list = document.getElementById('list');
var close = document.getElementById('close');

if (button) {
    button.addEventListener('click', () => {
        list.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        list.classList.remove('active');
    })
}