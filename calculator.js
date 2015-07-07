exports.addition = function(numbers) {
  return numbers.reduce(function(x,y) {return x + y});
};

exports.subtraction = function(numbers) {
  return numbers.reduce(function(x,y) {return x - y});
};

exports.multiplication = function(numbers) {
  return numbers.reduce(function(x,y) {return x * y});
}

exports.division = function(numbers) {
  return numbers.reduce(function(x,y) {return x / y});
}
