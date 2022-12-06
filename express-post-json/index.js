const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000.');
});

app.get('/api/grades', function (req, res) {
  const array = [];
  for (var obj in grades) {
    array.push(grades[obj]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201);
  res.json(grades[nextId]);
  nextId++;
});
