const express = require('express');
const app = express();

app.use(function (req, res) {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('This is a test');
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000.');
});
