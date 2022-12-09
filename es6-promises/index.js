const takeAChance = require('./take-a-chance');

const result = takeAChance('Noah');

result.then(value => {
  console.log(value);
})
  .catch(error => {
    console.error(error.message);
  });
