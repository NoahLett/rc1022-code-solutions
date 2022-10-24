var clicks = 0;

function handleClick(event) {
  clicks++;
  $clickcount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotbutton.className = 'hot-button hot';
  } else {
    $hotbutton.className = 'hot-button nuclear';
  }
}

var $hotbutton = document.querySelector('button.hot-button');

var $clickcount = document.querySelector('p.click-count');

$hotbutton.addEventListener('click', handleClick);
