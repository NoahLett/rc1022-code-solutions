/* exported maxValue */

function maxValue(stack) {
  const value = stack.peek();
  if (value === undefined) {
    return -Infinity;
  } else {
    let number = stack.pop();
    while (stack.peek() !== undefined) {
      const current = stack.pop();
      if (current > number) {
        number = current;
      }
    }
    return number;
  }
}
