var student = {
  firstName: 'Noah',
  lastName: 'Lett',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'real estate';

console.log('Value of livesInIrvine:', student.livesInIrvine);

console.log('Value of previousOccupation:', student.previousOccupation);

console.log('Value of student:', student);

var vehicle = {
  make: 'McLaren',
  model: '720S',
  year: 2022
};

vehicle['color'] = 'charcoal';
vehicle['isConvertible'] = true;

console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Ruby',
  type: 'Golden Retriever'
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
