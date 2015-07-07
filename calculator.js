exports.addition = function(x, y) {
  return x + y;
};

exports.subtraction = function(x, y) {
  return x - y;
};

exports.multiplication = function(inputArray) {
  var total = Number(inputArray[0]) * Number(inputArray[1]);
  if (inputArray.length > 2) {
    for (var i = 2; i < inputArray.length; i++) {
      total *= Number(inputArray[i]);
    }
  }
  return total;
};

exports.division = function(x, y) {
  return x / y;
};
