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

// const findTheOldest = function(array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;
//   })
// };

// const getAge = function(birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

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
