var $container = document.querySelector('.container');
var $view = document.querySelectorAll('.view');

$container.addEventListener('click', handleViewSwap);

function handleViewSwap(event) {
  var $dataView = event.target.getAttribute('data-view');
  if (event.target.matches('.fa-regular')) {
    for (var i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') === $dataView) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  } else if (event.target.matches('.fa-chevron-left')) {
    for (var x = 0; x < $view.length; x++) {
      if ($view[x].getAttribute('data-view') === $dataView) {
        $view[x].className = 'view';
      } else {
        $view[x].className = 'view hidden';
      }
    }
  } else if (event.target.matches('.fa-chevron-right')) {
    for (var y = 0; y < $view.length; y++) {
      if ($view[y].getAttribute('data-view') === $dataView) {
        $view[y].className = 'view';
      } else {
        $view[y].className = 'view hidden';
      }
    }
  }
}

var counter = 0;

function rotation() {
  counter++;
  if (counter >= 5) {
    counter = 0;
  }
  for (var i = 0; i < $view.length; i++) {
    if ($view[i] === $view[counter]) {
      $view[i].className = 'view';
    } else if ($view[i] !== $view[counter]) {
      $view[i].className = 'view hidden';
    }
  }
}

setInterval(rotation, 3000);
