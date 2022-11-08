/* exported titleCase */

function titleCase(string) {
  var loweredString = string.toLowerCase();
  var arrayOfString = loweredString.split(' ');
  for (var i = 0; i < arrayOfString.length; i++) {
    arrayOfString[i] = arrayOfString[i][0].toUpperCase() + arrayOfString[i].substring(1);
    if (arrayOfString[i] === 'Api') {
      arrayOfString[i] = 'API';
    } else if ((arrayOfString[i] === 'And' || arrayOfString[i] === 'Or' || arrayOfString[i] === 'Nor' || arrayOfString[i] === 'But' || arrayOfString[i] === 'A' || arrayOfString[i] === 'An' || arrayOfString[i] === 'The' || arrayOfString[i] === 'As' || arrayOfString[i] === 'At' || arrayOfString[i] === 'By' || arrayOfString[i] === 'For' || arrayOfString[i] === 'In' || arrayOfString[i] === 'Of' || arrayOfString[i] === 'On' || arrayOfString[i] === 'Per' || arrayOfString[i] === 'To') && i !== 0) {
      arrayOfString[i] = arrayOfString[i].toLowerCase();
    } else if (arrayOfString[i] === ('Javascript:')) {
      arrayOfString[i] = arrayOfString[i].substring(0, 4) + arrayOfString[i][4].toUpperCase() + arrayOfString[i].substring(5);
      i++;
      arrayOfString[i] = arrayOfString[i][0].toUpperCase() + arrayOfString[i].substring(1);
    } else if (arrayOfString[i].includes(':')) {
      i++;
      arrayOfString[i] = arrayOfString[i][0].toUpperCase() + arrayOfString[i].substring(1);
    } else if (arrayOfString[i].includes('-')) {
      var indexOfDash = arrayOfString[i].indexOf('-');
      arrayOfString[i] = arrayOfString[i].substring(0, indexOfDash + 1) + arrayOfString[i][indexOfDash + 1].toUpperCase() + arrayOfString[i].substring(indexOfDash + 2);
    } else if (arrayOfString[i] === 'Javascript') {
      arrayOfString[i] = 'JavaScript';
    }
  }
  return arrayOfString.join(' ');
}
