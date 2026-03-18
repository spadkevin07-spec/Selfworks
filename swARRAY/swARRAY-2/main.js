let numbers = [3, 5, 10, 2, 8];

let media = numbers.reduce((acc, number)=> acc + number) / 5;

let ValoriMinoriMedia = numbers.filter(number=> number < media)

console.log(`La media dei numeri e' ${media} e i valori minori sono ${ValoriMinoriMedia}`);

