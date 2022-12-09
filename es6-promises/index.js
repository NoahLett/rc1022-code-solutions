const takeAChance = require('./take-a-chance');

const result = takeAChance('Noah');

result.then(
  value => {
    console.log(value);
  },
  error => {
    console.log(error.message);
  }
);
