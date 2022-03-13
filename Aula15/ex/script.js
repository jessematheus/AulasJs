//Minha forma de fazer...
// const numero = Number(prompt('Digite um número:'));
// const numeroTitulo = document.getElementById('numero-titulo');
// numeroTitulo.innerHTML = numero;
// const raiz = document.getElementById('raiz');
// raiz.innerHTML = numero ** 0.5;
// const inteiro = document.getElementById('inteiro');
// const numeroT1 = document.getElementById('numeroT1');
// numeroT1.innerHTML = numero;
// inteiro.innerHTML = Number.isInteger(numero);
// const numero1 = document.getElementById('numero');
// numero1.innerHTML = (Number.isNaN(numero));
// const arreBaixo = document.getElementById('arredondadoBaixo');
// arreBaixo.innerHTML = (Math.floor(numero));
// const arreCima = document.getElementById('arredondadoCima');
// arreCima.innerHTML = (Math.ceil(numero));
// const duasCasas = document.getElementById('duasCasas');
// duasCasas.innerHTML = (numero.toFixed(2));

//forma do professor.
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;




