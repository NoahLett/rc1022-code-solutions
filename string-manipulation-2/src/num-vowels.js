/* exported numVowels */

/* Define a function with one parameter, string
Declare variable array and assign an empty array
Declare count and don't assign anything
Define a for loop w/ conditions: var i = 0; i < string.length; i++
  Define an if statement w/ conditions: check for vowels
    push string.charAt(i) into array
Assign array.length to variable count
Return count */

function numVowels(string) {
  var array = [];
  var count;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u' || string.charAt(i) === 'A' || string.charAt(i) === 'E' || string.charAt(i) === 'I' || string.charAt(i) === 'O' || string.charAt(i) === 'U') {
      array.push(string.charAt(i));
    }
  }
  count = array.length;
  return count;
}

/* Define function numVowels(string)
Declare array and assign empty array
Declare count and assign nothing
Define for loop w/ conditions: var i = 0; i < string.length; i++
  Define if statement that checks for upper and lower case vowels, and pushes string.charAt(i) into array when true
Assign array.length to count
Return count */
