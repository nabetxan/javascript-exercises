const repeatString = function (string, times) {
  let repeatedString = "";

  if (times < 0) {
    return "ERROR";
  }

  for (let i = 1; i <= times; i++) {
    repeatedString = repeatedString + string;
  }
  return repeatedString;
};

repeatString("mino", 4);

// Do not edit below this line
module.exports = repeatString;
