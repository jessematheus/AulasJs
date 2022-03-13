function numero(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'; //checar primeiro essa, pois ela checa as duas de baixo, se deixar ela em baixo, vai parar em uma delas.
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    if (n !== 'number') return n;
    return n;
}
for (var i = 0; i <= 100; i++) {
    console.log(i, numero(i));
}