let count = 3;
const decrease = () => {
  console.log(count--);
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
};

const intervalID = setInterval(decrease, 1000);
