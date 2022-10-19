var numberOne = 1;
var numberTwo = 2;
var numberThree = 3;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Batman', 'Deadpool', 'Spiderman', 'Captain America'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  },
  {
    title: 'Good to Great',
    author: 'Jim Collins'
  },
  {
    title: 'How to Change Your Mind',
    author: 'Michael Pollan'
  }
];

var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log(library);

var fullName = 'Noah Lett';

var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
