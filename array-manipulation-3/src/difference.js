/* exported difference */

/* Define a function with two parameters, first and second
Declare a variable and assign an empty array to it
Define a for loop that iterates through first
  Define an if statement that checks if first[i] is not in second
  If true, push first[i] into variable
Define a for loop that iterates through second
  Define an if statement that checks if second[x] is not in first
  If true, push second[x] into variable
Return variable */

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!first.includes(second[x])) {
      newArray.push(second[x]);
    }
  }
  return newArray;
}

/* Declare difference(first, second)
Declare newArray = []
Define a for loop that iterates through first
  Define an if statement w/ conditions: (!second.includes(first[i])), push first[i] into newArray
Define a for loop that iterates through second
  Define an if statement w/ conditions: (!first.includes(second[x])), push second[x] into newArray
Return newArray */
