// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};
const countLetters = function(word) {
  let result = {};
  for (let letter of word) {
    
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
    
  }
  return result;
};
console.log(countLetters('LHL'));


// has to have a function the passes a variable thats a string
//should have an empty array you could push results to
//for loop to iterate through array
// if statement to check if the letter is found in the word, then increment a variable to add one
//return the incremented variable