/* exported intersection */

/* Define a function with two parameters, first and second
Declare newArray = [];
Define a for loop that iterates through first
  Define an if statement that checks if first[i] is in second
  If true, push first[i] into newArray
Return newArray */

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}

/* Define intersection(first, second)
Declare newArray = []
Define for loop that iterates through first
  Define if statement w/ conditions: second.includes(first[i]), newArray.push(first[i])
Return newArray */
