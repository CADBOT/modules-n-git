var calc = require('./calculator');

var numberStrings = process.argv.slice(2);
var numbers = [];

numberStrings.forEach(function(numberString) {
  numbers.push(Number(numberString));
});

console.log(calc.addition(numbers));
