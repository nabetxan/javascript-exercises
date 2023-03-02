const fibonacci = function (value) {
  // change value to a number if it's a string
  const num = parseFloat(value);

  // check if value is negative number
  if (num < 0) {
    return "OOPS";
  }

  // check if value is 0 or 1
  if (num === 1 || num === 2) {
    return 1;
  }

  let i = 3;

  let num1 = 1;
  let num2 = 1;
  let fibonacciNum = 0;

  do {
    fibonacciNum = num1 + num2;
    num1 = num2;
    num2 = fibonacciNum;
    i++;
  } while (i < num + 1);

  return fibonacciNum;
};

// Do not edit below this line
module.exports = fibonacci;
