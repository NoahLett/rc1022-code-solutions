/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var spaceRemoved1 = '';
  var spaceRemoved2 = '';
  var firstArray = [];
  var secondArray = [];
  var newFirstString = '';
  var newSecondString = '';
  if (firstString.includes(' ')) {
    spaceRemoved1 += firstString.replaceAll(' ', '');
  } else {
    spaceRemoved1 += firstString;
  }
  if (secondString.includes(' ')) {
    spaceRemoved2 += secondString.replaceAll(' ', '');
  } else {
    spaceRemoved2 += secondString;
  }
  firstArray = spaceRemoved1.split('');
  secondArray = spaceRemoved2.split('');
  firstArray = firstArray.sort();
  secondArray = secondArray.sort();
  newFirstString = firstArray.join('');
  newSecondString = secondArray.join('');
  if (newFirstString === newSecondString) {
    return true;
  }
  return false;
}
