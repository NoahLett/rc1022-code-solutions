/* exported countdown */
function countdown(number) {
  var arr = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    arr.push(currentNumber);
    currentNumber--;
  }
  return arr;
}
