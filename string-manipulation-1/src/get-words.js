/* exported getWords */

/* 1. Define a function with on parameter, string
2. Declare a variable and assign to it the .split() method of the parameter string with an argument of a single space string
4. Return variable */

function getWords(string) {
  var newArr;
  if (string !== '') {
    newArr = string.split(' ');
  } else {
    newArr = [];
  }
  return newArr;
}

/* 1. Define getWords(string)
2. Declare variable newArr without an assignment
3. Define an if statement with condition: as long as string !== '', assign string.split(' ') to newArr, else assign []
4. Return newArr */
