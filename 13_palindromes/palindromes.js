const palindromes = function (string) {
  // Only accept letters and numbers
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // convert String to array, filter special characters and join them together
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // create reversed String
  const reversedString = cleanedString.split('').reverse().join('');

  // compare two strings
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
