/* exported reverseWord */

/* 1. Define a function with one parameter, word
2. Define a variable and assign an empty array to it
3. Define a for loop that iterates backwards through the length of the parameter string and pushes the reversed letters into the array variable declared above
4. Use the .join() method to create a new string with the reversed letters and assign it to a new variable
5. Return declare the new variable */

function reverseWord(word) {
  var reversedStringInArray = [];
  for (var i = word.length - 1; i >= 0; i--) {
    reversedStringInArray.push(word.charAt(i));
  }
  var reversedString = reversedStringInArray.join('');
  return reversedString;
}
