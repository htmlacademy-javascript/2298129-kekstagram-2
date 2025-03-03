const isValidLength = (string = '', maxLength = 1) => string.length <= maxLength;

const isPalindrome = function (string = '') {
  const cleanedString = string
    .toLowerCase()
    .replace(/[/\s]/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');
};

const getNumber = function (input = '') {
  const string = input.toString();
  const numbers = string.match(/\d/g);
  return numbers ? parseInt(numbers.join(''), 10) : NaN;
};
