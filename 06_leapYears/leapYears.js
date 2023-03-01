const leapYears = function (year) {
  // can't be divided by 4? >> false
  if (year % 4 !== 0) {
    return false;
  }

  // can be devided by 100 && can't be divided by 400? >> false
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }

  return true;
};

// Do not edit below this line
module.exports = leapYears;
