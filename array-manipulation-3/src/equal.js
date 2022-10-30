/* exported equal */

/* Define a function with two parameters, first and second
Define an if statement w/ conditions: if (first === second), return true.
  Else, return false. */

function equal(first, second) {
  if (first.length === 0 && second.length === 0) {
    return true;
  } else {
    for (var i = 0; i < first.length; i++) {
      for (var x = 0; x < second.length; x++) {
        if (typeof first[i] === typeof second[x]) {
          if (typeof first[i] !== 'object') {
            return first.toString() === second.toString();
          } else {
            var array1 = Object.values(first[i]);
            var array2 = Object.values(second[x]);
            return array1.toString() === array2.toString();
          }
        }
      }
    }
  }
}

/* Define equal(first, second)
Define an if statement that checks if first and second are empty arrays
Else, define a for loop that iterates through first
  Define another for loop that iterates through second
    Define an if statement that checks if first[i] is not an object
      If true, return the arrays as strings if they're equal to eachother
    Else, declare two variables and assign Object.values(first[i]) and Object.values(second[x])
    Return the arrays as strings if they're equal to each other */
