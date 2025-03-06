let numbers = [1, 2, 3, 4, 5];

function mainFunction(callback) {
  console.log("Performing operation...");

  numbers.forEach(callback(number));

  //   numbers.forEach(callback);
}

function callbackFunction(number) {
  console.log("Result: " + number);
}

mainFunction(callbackFunction);
