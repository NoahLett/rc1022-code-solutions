var click = 0;

var $lightbulb = document.querySelector('div.lightbulb');
var $container = document.querySelector('div.container');

$lightbulb.addEventListener('click', handleClick);

function handleClick(event) {
  click++;
  if (click === 0) {
    $lightbulb.className = 'lightbulb off';
    $container.className = 'container no-light';
  } else if (click % 2 !== 0) {
    $lightbulb.className = 'lightbulb on';
    $container.className = 'container light';
  } else {
    $lightbulb.className = 'lightbulb off';
    $container.className = 'container no-light';
  }
}
