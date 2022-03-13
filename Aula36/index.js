// For in -> lê os índices ou chaves ou objeto

//const frutas = ['Pera', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}



// for (var i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let i in frutas) {
//     console.log(i);
// }