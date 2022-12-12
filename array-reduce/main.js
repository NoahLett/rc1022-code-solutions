const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(product);

const balance = () => {
  const newArray = [];
  for (var i = 0; i < account.length; i++) {
    if (account[i].type === 'deposit') {
      newArray.push(account[i].amount);
    } else if (account[i].type === 'withdrawal') {
      newArray.push(-Math.abs(account[i].amount));
    }
  }
  const sum = newArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
};

console.log(balance());

const composite = traits.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
console.log(composite);

let totalAssets = account[0].amount;

const balance2 = account.reduce((accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    totalAssets += currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    totalAssets -= currentValue.amount;
  }
  return totalAssets;
});
console.log(balance2);
