const palindromes = function (string) {
  const newString = string.toLowerCase().replace(/[^0-9a-z]/g, '');
  return newString == newString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
