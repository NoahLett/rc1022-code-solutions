/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else if (stack.peek() !== undefined) {
    const first = stack.pop();
    stack.push(value);
    stack.push(first);
  }
}
