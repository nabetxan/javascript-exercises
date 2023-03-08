const getTheTitles = function (obj) {
  const titles = [];
  obj.map(function (key) {
    titles.push(key["title"]);
  });
  return titles;
};

// const getTheTitles = function(array) {
//   return array.map(book => book.title);
// };

// Do not edit below this line
module.exports = getTheTitles;
