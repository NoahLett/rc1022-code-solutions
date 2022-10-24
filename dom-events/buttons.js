function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('event.target:', event.target);
}

var $clickbutton = document.querySelector('button.click-button');

$clickbutton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event.target:', event.target);
}

var $hoverbutton = document.querySelector('button.hover-button');

$hoverbutton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('event.target:', event.target);
}

var $doubleclickbutton = document.querySelector('button.double-click-button');

$doubleclickbutton.addEventListener('dblclick', handleDoubleClick, false);
