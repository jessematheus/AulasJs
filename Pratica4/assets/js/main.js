const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelector('p');
const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
    const cor = document.querySelector('.cor');
    const corSelc = (cor.value);
    e.preventDefault();
    p.style.color = corSelc;
    console.log(corSelc);

});
