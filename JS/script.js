//Растемнение
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    });

//Затемнение
const _links = document.querySelectorAll('a[href]');
_links.forEach(_link => {
    _link.addEventListener('click', e => {
        const _href = _link.getAttribute('href');
        if (!_href.startsWith('#') && !_link.target) {
            e.preventDefault();
            document.body.classList.remove('loaded');
            setTimeout(() => window.location.href = _href, 500);
        }
    });
});

//Музыка
const music = document.getElementById('bg-music');
const toggleButton = document.getElementById('music-toggle');

    // Вкл трек по клику
    document.body.addEventListener('click', () => {
        music.play()
            .then(() => toggleButton.textContent = '♪ Выключить музыку')
    }, { once: true });


toggleButton.addEventListener('click', toggleMusic);
function toggleMusic() {
    if (music.paused) {
        music.play()
    } else {
        music.pause();
    }
    toggleButton.textContent = music.paused ? "Включить музыку" : "Выключить музыку";
}

/*
//Модальное окно обратной связи
function showAlert() {
    // Получаем значения полей
    const name = document.getElementById('_name').value.trim();
    const email = document.getElementById('_email').value.trim();
    const message = document.getElementById('_message').value.trim();
    
    // Проверка заполненности
    if (!name || !email || !message) {
        alert("Пожалуйста, заполните все поля!");
    }
    
    // Если все проверки пройдены
    alert("Спасибо, ваше сообщение отправлено!");
}
*/
