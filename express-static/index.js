const express = require('express');
const path = require('node:path');

const app = express();

const joined = path.join('_dirname', 'public');
console.log(joined);

const serve = (express.static('public'));

app.use(serve);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
