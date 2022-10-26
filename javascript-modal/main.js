var click = 0;

var $openModalButton = document.querySelector('.open-modal-button');
var $modal = document.querySelector('.modal');
var $overlay = document.querySelector('.overlay');
var $answer = document.querySelector('.answer');

$openModalButton.addEventListener('click', handleClickOne);
$answer.addEventListener('click', handleClickTwo);

function handleClickOne(event) {
  click++;
  if (click > 0) {
    $overlay.className = 'overlay';
    $modal.className = 'modal';
  } else if (click > 1) {
    click = 0;
  } else {
    $overlay.className = 'overlay no-display';
    $modal.className = 'modal no-display';
  }
}

function handleClickTwo(event) {
  click++;
  if (click > 0) {
    $overlay.className = 'overlay no-display';
    $modal.className = 'modal no-display';
  } else if (click > 1) {
    click = 0;
  } else {
    $overlay.className = 'overlay';
    $modal.className = 'modal';
  }
}
