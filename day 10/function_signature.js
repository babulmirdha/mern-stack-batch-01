function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a - b;
}

function div(a, b) {
  return a - b;
}

function mainFunction(a, b, callback) {
  console.log(callback(a, b));
}

mainFunction(5, 3, add);

mainFunction(5, 3, sub);

mainFunction(5, 3, mul);

mainFunction(5, 3, div);
