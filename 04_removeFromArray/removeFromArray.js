const removeFromArray = function (array, ...removeValue) {
  const newArray = [...array];
  for (let i = 0; i < removeValue.length; i++) {
    const index = newArray.indexOf(removeValue[i]);
    if (index !== -1) {
      newArray.splice(index, 1);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
