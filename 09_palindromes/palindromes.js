const palindromes = function (words) {
  // change to UpperCase
  let letters = words.toUpperCase();
  // delete space
  letters = letters.trim();
  // delete simpols
  letters = letters.replace(/[^A-Za-z0–9]/g, "");

  lettersBackwords = "";

  for (let i = letters.length - 1; i >= 0; i--) {
    lettersBackwords = lettersBackwords + letters[i];
  }
  return letters === lettersBackwords;
};

// const palindromes = function(string) {
//   const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//   return (
//     processedString
//       .split("")
//       .reverse()
//       .join("") == processedString
//   );
// };

// Do not edit below this line
module.exports = palindromes;
