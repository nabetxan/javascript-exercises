const roundToOneDecimal = function (num) {
  return Math.round(num * 10) / 10;
};

const convertToCelsius = function (temp) {
  //(temp-32) * 5/9

  let celsius = ((temp - 32) * 5) / 9;
  return roundToOneDecimal(celsius);
};

const convertToFahrenheit = function (temp) {
  //(temp * 9/5) + 32
  let fahrenheit = (temp * 9) / 5 + 32;
  return roundToOneDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
