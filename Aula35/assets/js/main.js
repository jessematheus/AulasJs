const elementos = [
    { tag: 'p', texto: 'Frase1' },
    { tag: 'div', texto: 'Frase2' },
    { tag: 'footer', texto: 'Frase3' },
    { tag: 'section', texto: 'Frase4' },
];
const container = document.querySelector('.container');
const div = document.createElement('div'); //cria o elemento div
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criar = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    criar.appendChild(textoCriado);//nessa tag adicionou um filho a variavel 'Criar'
    div.appendChild(criar); // aqui a tag Div está recebendo por herança tudo da variavel 'criar'
}
container.appendChild(div); //aqui a tag container está recebendo tudo que está em div, que no caso é a variavel criar, e isso é feito assim, pois a variavel criar está dentro do escopo de laço. 
