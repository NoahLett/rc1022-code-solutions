const fs = require('fs');
fs.readFile('dijkstra.txt', 'utf8', function (err, data) {
  if (err) {
    throw err;
  } else {
    return console.log(data);
  }
});
