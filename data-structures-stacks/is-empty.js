/* exported isEmpty */

function isEmpty(stack) {
  const value = stack.peek();
  if (value === undefined) {
    return true;
  } else {
    return false;
  }
}
