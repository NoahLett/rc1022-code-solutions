/* exported isLowerCased */

/* 1. Define a function with one parameter, word
2. Declare a variable with no assignment
3. Define an if statement with the following condition: word.toLowerCase() === word, assign true to answer, else assign false to answer
4. Return answer */

function isLowerCased(word) {
  var answer;
  if (word.toLowerCase() === word) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

/* 1. Define isLowerCased(word)
2. Declare variable answer with no assignment
3. Define if statement with the following condition: word.toLowerCase() === word, assign true to answer, else assign false
4. Return answer */
