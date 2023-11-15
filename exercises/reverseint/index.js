// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const strNumber = n.toString().split(''); 
  const reversedInt = parseInt(strNumber.reverse().join(''))
  console.log(reversedInt)
  if (n < 0) {
    const reversedIntWithMinus = reversedInt * -1;
    console.log(n < 0, n, reversedIntWithMinus, reversedInt * -1)
    return reversedIntWithMinus;
  } else {
    return reversedInt;
  }
}

reverseInt(189)
reverseInt(-51)
reverseInt(51)

module.exports = reverseInt;
