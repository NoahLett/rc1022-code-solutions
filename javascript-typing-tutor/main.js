var $span = document.querySelectorAll('span');

document.addEventListener('keydown', handleKeyStroke);

var index = 0;

function handleKeyStroke(event) {
  if (event.key === $span[index].textContent) {
    $span[index].className = 'green';
    $span[index + 1].className = 'underscore';
    index++;
  } else if (event.key !== $span[index].textContent) {
    $span[index].className = 'red underscore';
  }
}
