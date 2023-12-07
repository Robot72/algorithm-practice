// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;

/*


function anagrams(stringA, stringB) {
  const clearedStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const clearedStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  let mapA = {};
  let mapB = {};
  for (let char of clearedStringA) {
    mapA[char] ? mapA[char] += 1 : mapA[char] = 1;
  }
  for (let char of clearedStringB) {
    mapB[char] ? mapB[char] += 1 : mapB[char] = 1;
  }

  if (Object.keys(mapA).length === Object.keys(mapB).length) {
    for (let char in mapA) {
      if (mapA[char] !== mapB[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
 */