// let a = 'A';
// let b = 'B';
// let c = 'C';
// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(a, b, c);

//Desestruturação de Array

//               0  1  2  3  4  5  6  7  8 
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete, ...resto] = numeros; //fazendo isso, estou pegando o valor que contem no indice e jogando diretamente para uma variavel. 
console.log(um, tres, cinco, sete);
console.log(resto);

//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numero;
const [, [, , seis]] = numero
console.log(lista2[2]);
console.log(numero[1][2]);
console.log(seis);