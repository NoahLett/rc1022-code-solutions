/* exported isUpperCased */

/* 1. Define a function with one parameter, word
2. Declare a new variable
3. Define an if statement with the following condition: word.toUpperCase() === true, return true, else return false
4. Return the variable */

function isUpperCased(word) {
  var answer;
  if (word.toUpperCase() === word) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

/* 1. Define function isUpperCased(word)
2. Declare variable answer, without an assignment
3. Define an if statement with the following condition: word.toUpperCase() is the same as word, assign true to answer, else assign false to answer
4. Return answer */
