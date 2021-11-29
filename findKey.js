const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(` √√√√ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` XXXX Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKey = function(object,callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key]))
      return key;
  }
  return undefined;
};


/// applying findkey and retuning output to result1; to be used by assertEqual function
let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

//// applying findKey function
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(result1,"noma"); /// applying assertEqual function for testing output of findKey function


//module.exports = findKey;

