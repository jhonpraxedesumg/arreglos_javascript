const nombres = ['tom', 'alex', 'bob'];

const deleted = nombres.splice(2, 1, 'zack');

console.log(deleted); // ["bob"]
console.log(nombres); // ["tom", "alex", "zack"