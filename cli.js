var calc = require('./calculator');

var operation = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

console.log(calc.operations(operation,a,b));
