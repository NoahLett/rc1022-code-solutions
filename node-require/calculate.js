const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const arrayOfCalc = (process.argv[2].split(' '));

if (arrayOfCalc.includes('plus')) {
  const sum = add(Number(arrayOfCalc[0]), Number(arrayOfCalc[2]));
  console.log('result:', sum);
} else if (arrayOfCalc.includes('minus')) {
  const difference = subtract(Number(arrayOfCalc[0]), Number(arrayOfCalc[2]));
  console.log('result:', difference);
} else if (arrayOfCalc.includes('times')) {
  const product = multiply(Number(arrayOfCalc[0]), Number(arrayOfCalc[2]));
  console.log('result:', product);
} else if (arrayOfCalc.includes('over')) {
  const quotient = divide(Number(arrayOfCalc[0]), Number(arrayOfCalc[2]));
  console.log(quotient);
} else {
  console.log('Invalid Calculation');
}
