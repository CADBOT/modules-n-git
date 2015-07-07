exports.operations = function(operation,x,y) {
  if (operation == 'add') {
    return x + y;
  } else if (operation =='subtract') {
    return x - y;
  } else if (operation =='multiply') {
    return x * y;
  } else if (operation =='divide') {
    return x / y;
  }
}