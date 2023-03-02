const findTheOldest = function (obj) {
  let oldestPersonObj = obj.reduce((oldestPersonObj, currentPersonObj) => {
    let oldestAge = getAge(
      oldestPersonObj.yearOfBirth,
      oldestPersonObj.yearOfDeath
    );
    let currentAge = getAge(
      currentPersonObj.yearOfBirth,
      currentPersonObj.yearOfDeath
    );

    if (oldestAge <= currentAge) {
      return currentPersonObj;
    } else {
      return oldestPersonObj;
    }
  }, obj[0]);

  return oldestPersonObj;
};

const getAge = function (birth, death) {
  //get this year
  let d = new Date();
  const currentYear = d.getFullYear();

  if (death === undefined) {
    death = currentYear;
  }
  return death - birth;
};

//   let oldestPersonObj = obj[0];

//   for (let i = 1; i < obj.length; i++) {
//     let oldestAge = getAge(oldestPersonObj.yearOfBirth, oldestPersonObj.yearOfDeath);
//     let currentAge = getAge(obj[i].yearOfBirth, obj[i].yearOfDeath);

//     if (oldestAge <= currentAge) {
//       oldestAge = currentAge;
//       oldestPersonObj = obj[i];
//     }
//   }
//   return oldestPersonObj;
// };

// const getAge = function (birth, death) {
//   //get this year
//   let d = new Date();
//   const currentYear = d.getFullYear();

//   if (death === undefined) {
//     death = currentYear;
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
