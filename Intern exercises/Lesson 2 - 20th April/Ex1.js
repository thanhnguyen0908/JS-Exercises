const prompt = require('prompt-sync')();
 function checkPalindrome(str) {
  const text = string.length;
  for (let i = 0; i < text / 2; i++) 
  {
      if (string[i] !== string[text - 1 - i]) 
      {
          return 'Not palindrome';
      }
  }
  return 'Palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);