var calc = require('./calculator');

// var a = Number(process.argv[2]);
// var b = Number(process.argv[3]);

// console.log(calc.addition(a,b));

var inputArray = process.argv.splice(2, Number.MAX_VALUE);
console.log(calc.multiplication(inputArray));
