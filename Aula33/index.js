const pessoa = {
    nome: 'Jessé',
    sobrenome: 'Amorim',
    idade: 21,
    endereco: {
        rua: 'Rua Alberto Lundgren',
        numero: 546
    }
};
// Atribuição via desestruturação
const { nome, ...resto } = pessoa;
// const { nome, sobrenome, idade } = pessoa;
// const { endereco: { rua, numero },
//     endereco
// } = pessoa;
// console.log(nome, sobrenome, idade);
// console.log(rua, numero);
console.log(nome, resto);