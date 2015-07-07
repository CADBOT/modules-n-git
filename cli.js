var calc = require('./calculator');

var a = Number(process.argv[2]);
var b = Number(process.argv[3]);

console.log(calc.addition(a,b));

console.log(calc.subtraction(a,b));

console.log(calc.division(a,b));

console.log(calc.multipilication(a,b));
