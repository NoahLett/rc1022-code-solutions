/* exported isEmpty */

function isEmpty(queue) {
  if (queue.peek() !== undefined) {
    return false;
  } else if (queue.peek() === undefined) {
    return true;
  }
}
