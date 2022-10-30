/* exported zip */

/* Define a function with two parameters, first and second
Declare a variable and assign an empty array
Define an if statement that checks if the lengths of both arrays are equal, or if the length of first is greater than that of second
  If true, iterate through the length of the second, and for each iteration, push [first[i] and second[i]] into the variable
  If false, iterate through the length of the first array, and for each iteration push [first[x] and second[x]]
Return the variable */

function zip(first, second) {
  var combinedArray = [];
  if (first.length === second.length || first.length > second.length) {
    for (var i = 0; i < second.length; i++) {
      combinedArray.push([first[i], second[i]]);
    }
  } else {
    for (var x = 0; x < first.length; x++) {
      combinedArray.push([first[x], second[x]]);
    }
  }
  return combinedArray;
}

/* Define zip(first, second)
Declare combinedArray = [];
Define if statement w/ conditions: if first and second are the same length OR first is longer,
  Define a for loop that iterates through the length of second and pushes [first[i] and second[i]] into combinedArray
  Else, define a for loop that iterates through the length of first and pushes [first[i] and second[i]] into combinedArray
Return combinedArray */
