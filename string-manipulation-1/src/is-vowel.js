/* exported isVowel */

/* 1. Define a function with one parameter, char
2. Declare a variable with no assignment
3. Define an if statement with a condition that checks if char is either a capital or lowercase vowel. If it is, assign true to the variable, else false.
4. Return answer */

function isVowel(char) {
  var answer;
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

/* 1. Define isVowel(char)
2. Declare variable answer with no assignment
3. Define if statement that checks if char is an upper or lower case vowel, and assigns either true or false to answer accordingly
4. Return answer */
