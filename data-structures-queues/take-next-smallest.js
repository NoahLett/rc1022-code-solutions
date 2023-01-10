/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else if (queue.peek() !== undefined) {
    const top = queue.dequeue();
    if (queue.peek() === undefined) {
      return top;
    } else if (top <= queue.peek()) {
      return top;
    } else if (top > queue.peek()) {
      queue.enqueue(top);
      let second = queue.dequeue();
      while (second > queue.peek()) {
        queue.enqueue(second);
        second = queue.dequeue();
      }
      return second;
    }
  }
}
