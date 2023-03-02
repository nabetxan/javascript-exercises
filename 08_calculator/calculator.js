const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sumArray = 0;
  for (i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  return sumArray;
};

const multiply = function (array) {
  let multiplyArray = 1;
  for (i = 0; i < array.length; i++) {
    multiplyArray = multiplyArray * array[i];
  }
  return multiplyArray;
};

const power = function (num1, num2) {
  let powerNum = num1;
  for (let i = 1; i < num2; i++) {
    powerNum = powerNum * num1;
  }
  return powerNum;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  let factorialNum = 1;
  for (let i = num; i > 0; i--) {
    factorialNum = factorialNum * i;
  }
  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
