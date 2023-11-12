// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

//console.log(palindrome('abccba'))

module.exports = palindrome;

/*
Method 1:

function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

My implementation with 50% tests passed

function palindrome(str) {
  const count = str.length;
  const halfCount = count / 2;
  if (count % 2 > 0) {
    return false;
  }
  
  let firstPart = [];
  let index = 1;
  for (let char of str) {
    if (index < halfCount) {
      firstPart.push(char);
      index += 1;
    } else {
      if (firstPart[index-1] === char) {
        return false;
      }
      index -= 1;
    } 
  }
  return true;
}
*/
