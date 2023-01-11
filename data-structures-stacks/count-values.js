/* exported countValues */

function countValues(stack) {
  let x = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    x += 1;
  }
  return x;
}
