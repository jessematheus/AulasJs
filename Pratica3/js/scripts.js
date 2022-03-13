function teste() {
    const form = document.querySelector('.enviar');
    const resultado = document.querySelector('.resultado');
    //const enviar = document.querySelector('.enviar'); não da para fazer isso, a ideia aqui seria pegar a class do butão,
    //e atribuir a função para ele, porem não executa a função, pois ela está dentro da class form.
    const pessoas = [];

    function receberEvento(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
            `${peso.value} ${altura.value}</p>`;
    }
    form.addEventListener('submit', receberEvento);//aqui eu chamo a variavel que está sendo usada para o formulario.

}
teste();