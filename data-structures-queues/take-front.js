/* exported takeFront */

function takeFront(queue) {
  if (queue.peek() !== undefined) {
    const value = queue.dequeue();
    return value;
  } else if (queue.peek() === undefined) {
    return undefined;
  }
}
