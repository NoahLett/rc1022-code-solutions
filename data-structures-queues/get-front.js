/* exported getFront */

function getFront(queue) {
  if (queue.peek() !== undefined) {
    const value = queue.peek();
    return value;
  } else if (queue.peek() === undefined) {
    return undefined;
  }
}
