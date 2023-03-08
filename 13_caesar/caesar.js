const caesar = function (string, num) {
  const stringArray = [];
  for (let i = 0; i < string.length; i++) {
    let getLetter = "";
    const code = string.charCodeAt(i);

    // is it Letters or space/simpols?
    if (code >= 65 && code <= 90) {
      getLetter = String.fromCharCode(
        ((((code - 65 + num) % 26) + 26) % 26) + 65
      );
    } else if (code >= 97 && code <= 122) {
      getLetter = String.fromCharCode(
        ((((code - 97 + num) % 26) + 26) % 26) + 97
      );
    } else {
      getLetter = string[i];
    }
    stringArray.push(getLetter);
  }
  // change array to sentence
  return stringArray.join("");
};

// code - 65 - This subtracts the ASCII code for 'A' (which is 65) from the ASCII code of the input letter, giving us a value between 0 and 25 that represents the letter's position in the alphabet.
// code - 65 + num - This adds the num argument (which represents the desired shift in the alphabet) to the letter's position in the alphabet.
// (code - 65 + num) % 26 - This takes the result from step 2 and calculates the remainder when dividing by 26. This ensures that the shift is always within the range of the alphabet (i.e., between 0 and 25).
// ((code - 65 + num) % 26 + 26) % 26 - This adjusts the result from step 3 to handle negative shifts. If num is negative, we need to "wrap around" to the end of the alphabet when shifting leftward. To do this, we add 26 to the result from step 3 before taking the remainder again. This ensures that the result is always positive and within the range of the alphabet.
// ((code - 65 + num) % 26 + 26) % 26 + 65 - This adds the ASCII code for 'A' back to the shifted position in the alphabet, giving us the ASCII code for the corresponding letter.

// Do not edit below this line
module.exports = caesar;
