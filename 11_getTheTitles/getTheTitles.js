const getTheTitles = function (obj) {
  const titles = [];
  obj.map(function (key) {
    titles.push(key["title"]);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
