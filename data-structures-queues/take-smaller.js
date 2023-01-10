/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (queue.peek() === undefined) {
      return first;
    } else if (queue.peek() !== undefined) {
      const second = queue.dequeue();
      if (first < second) {
        queue.enqueue(second);
        return first;
      } else if (second === first) {
        queue.enqueue(second);
        return first;
      } else if (second < first) {
        queue.enqueue(first);
        return second;
      }
    }
  }
}
