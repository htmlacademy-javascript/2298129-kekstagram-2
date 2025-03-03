const isValidLength = (string = '', maxLength = 1) => string.length <= maxLength;

const isPalindrome = function (string = '') {
  const cleanedString = string
    .toLowerCase()
    .replace(/[/\s]/g, '');

  if (cleanedString.length <= 1) {
    return true;
  }

  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
