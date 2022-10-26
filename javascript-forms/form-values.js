var $form = document.forms[0];

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var object = {};
  var $name = document.forms[0].elements.name.value;
  var $email = document.forms[0].elements.email.value;
  var $message = document.forms[0].elements.message.value;
  object.name = $name;
  object.email = $email;
  object.message = $message;
  console.log(object);
}
