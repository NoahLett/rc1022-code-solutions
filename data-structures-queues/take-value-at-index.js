/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else if (queue.peek() !== undefined) {
    let x = 0;
    while (x < index) {
      const first = queue.dequeue();
      queue.enqueue(first);
      x++;
    }
    const value = queue.dequeue();
    return value;
  }
}
