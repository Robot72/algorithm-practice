// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  str.split('').forEach((char) => {
    chars[char] = chars[char] + 1 || 1;
  })
  
  let maxChar = 0;
  let maxCharName = '';
  for (let char in chars) {
    if (maxChar < chars[char]) {
      maxChar = chars[char];
      maxCharName = char;
    }
  }
  console.log('MAX: ',maxChar, maxCharName);
  return maxCharName;
}


module.exports = maxChar;
