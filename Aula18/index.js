function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Lucas', 'Otávio', 25);
console.log(pessoa1, pessoa2);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// const pessoa2 = {
//     nome: 'Lucas',
//     sobrenome: 'Mario',
//     idade: 55
// };
// console.log(pessoa1.nome);