const sumAll = function (num1, num2) {
  // check if both are valid Numbers
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  // check if both Numbers are more than 0
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  // check if the smaller Number comes first
  let firstNum = num1;
  let lastNum = num2;

  if (num1 > num2) {
    firstNum = num2;
    lastNum = num1;
  }

  //   const firstNum = Math.min(Num1, Num2);
  //   const lastNum = Math.max(Num1, Num2);

  let answer = 0;
  for (let i = lastNum; i >= firstNum; i--) {
    answer += i;
  }

  return answer;
};

// Do not edit below this line
module.exports = sumAll;
