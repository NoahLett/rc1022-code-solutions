var $h1 = document.querySelector('.message');

function convertText() {
  $h1.textContent = 'Hello There';
}

setTimeout(convertText, 2000);
