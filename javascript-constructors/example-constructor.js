function ExampleConstructor() {}

console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

var alpha = new ExampleConstructor();
console.log(alpha);

var bravo = alpha instanceof ExampleConstructor;
console.log(bravo);
