/* exported union */

/* Define a function with two parameters, first and second
Concatinate first and second and assign the result to a new variable
Assign an empty array to a new variable
Define a for loop that iterates through the first variable
  Define an if statement that checks if variable[i] is not in the second variable
  If true, push variable[i] into empty array variable
Return empty array variable */

function union(first, second) {
  var combined = first.concat(second);
  var newArray = [];
  for (var i = 0; i < combined.length; i++) {
    if (!newArray.includes(combined[i])) {
      newArray.push(combined[i]);
    }
  }
  return newArray;
}

/* Define union(first, second)
Declare var combined = first.concat(second)
Declare var newArray = []
Define a for loop that iterates through combined
  Define an if statement that checks if combined[i] is not in newArray
  If true, push combined[i] into newArray
Return newArray */
