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

// const fibonacci = function(count) {
//   if (count < 0) return "OOPS";
//   if (count === 0) return 0;
//   let a = 0;
//   let b = 1;
//   for (let i = 1; i < count; i++) {
//     const temp = b;
//     b = a + b;
//     a = temp;
//   }
//   return b;
// };

// Do not edit below this line
module.exports = fibonacci;
