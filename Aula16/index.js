const alunos = ['Luiz', 'Maria', 'João']; //Como boa pratica manter o Array com apenas um tipo de dado
// alunos[0] = 'Eduardo'; Assim o indice em questão terá seu valor modificado. 
// alunos[3] = 'Luiza';
// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';
//alunos.push('Luiza'); Usa-se a função push para colocar um elemento após o ultimo. 
//alunos.push('Fábio');
// alunos.unshift('Luiza');//Utiliza-se a função unshift para colocar um elemento antes do primeiro.
// alunos.unshift('Fábio');
//delete alunos[1]; //Vai deletar o elemento do indice, porem o indice ficara como vazio.

alunos.pop();// para remover elementos do array, nativamente remove o ultimo elemento, porem pode ser selecionado o elemento desejado.
const removido = alunos.pop(); // coloca-se a função atrelada a uma variavel, para que o elemento removido ainda possa ser amarzenado.
alunos.shift(); //para remover elementos no começo do array.
console.log(removido);
console.log(alunos);


// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);