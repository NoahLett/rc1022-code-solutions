/* exported capitalizeWord */

/* Define a function with one parameter, word
Declare a variable and assign the lowercased version of word
Define an if statement w/ conditions: variable === 'javascript', return 'JavaScript'
  Else, return the concatination of the first character of the variable with the slice(1) method of the variable */

function capitalizeWord(word) {
  var toLower = word.toLowerCase();
  if (toLower === 'javascript') {
    return 'JavaScript';
  } else {
    return toLower.charAt(0).toUpperCase() + toLower.slice(1);
  }
}

/* Define capitalizeWord(word)
Declare toLower and assign word.toLowerCase()
Define an if statement w/ conditions: toLower === 'javascript', return 'JavaScript'
  Else, return toLower.charAt(0).toUpperCase() + toLower.slice(1) */
