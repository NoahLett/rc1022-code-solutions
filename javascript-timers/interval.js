var $countDown = document.querySelector('.countdown-display');

function countBackwards() {
  $countDown.textContent--;
  if ($countDown.textContent === '0') {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}

var intervalID = setInterval(countBackwards, 1000);
