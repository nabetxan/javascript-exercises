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

// const convertToCelsius = function(fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
// };

// const convertToFahrenheit = function(celsius) {
//   return Math.round(((celsius * 9/5) + 32) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
