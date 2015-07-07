var calc = require('./calculator');

var x = Number(process.argv[2]);
var y = Number(process.argv[3]);

calc.addition(x, y);
calc.subtraction(x, y);
calc.multiply(x, y);
calc.division(x, y);
