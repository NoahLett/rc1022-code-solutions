/* exported reverseWords */

function reverseWords(string) {
  var reverse = '';
  var tempArray = [];
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  tempArray = reverse.split(' ');
  tempArray = tempArray.reverse();
  newString += tempArray.join(' ');
  return newString;
}
