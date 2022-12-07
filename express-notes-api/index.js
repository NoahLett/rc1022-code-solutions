const fs = require('fs');
const data = require('./data.json');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = [];
  for (var prop in data.notes) {
    array.push(data.notes[prop]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const obj = {};
  const id = Number(req.params.id);
  if (Number.isInteger(id) === true && id > 0 && Object.hasOwn(data.notes, id)) {
    res.status(200).json(data.notes[req.params.id]);
  } else if (!Number.isInteger(id) === true || id < 0) {
    obj.error = 'id must be a positive integer';
    res.status(400).json(obj);
  } else {
    obj.error = `cannot find note with id ${id}`;
    res.status(404).json(obj);
  }
});

app.post('/api/notes', (req, res) => {
  const obj = {};
  if (!req.body.content) {
    obj.error = 'content is a required field';
    res.status(400).json(obj);
  } else if (req.body !== null) {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        obj.error = 'An unexpected error occurred.';
        res.status(500).json(obj);
      } else {
        res.status(201);
        res.json(data.notes[data.nextId - 1]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const obj = {};
  const id = Number(req.params.id);
  if (Number.isInteger(id) === true && id > 0 && Object.hasOwn(data.notes, id)) {
    delete data.notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        obj.error = 'An unexpected error occurred.';
        res.status(500).json(obj);
      } else {
        res.status(204).send();
      }
    });
  } else if (!Number.isInteger(id) === true || id < 0) {
    obj.error = 'id must be a positive integer';
    res.status(400).json(obj);
  } else {
    obj.error = `cannot find note with id ${id}`;
    res.status(404).json(obj);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const obj = {};
  const id = Number(req.params.id);
  if (Number.isInteger(id) === true && id > 0 && Object.hasOwn(data.notes, id) && req.body.content) {
    data.notes[id] = req.body;
    data.notes[id].id = id;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        obj.error = 'An unexpected error occurred.';
        res.status(500).json(obj);
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  } else if (!Number.isInteger(id) === true || id < 0) {
    obj.error = 'id must be a positive integer';
    res.status(400).json(obj);
  } else if (!req.body.content) {
    obj.error = 'content is a required field';
    res.status(400).json(obj);
  } else {
    obj.error = `cannot find note with id ${id}`;
    res.status(404).json(obj);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000.');
});
