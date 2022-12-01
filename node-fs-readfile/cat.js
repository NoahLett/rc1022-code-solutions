const fs = require('fs');

let i = 2;

function fileReader() {
  if (i < process.argv.length) {
    fs.readFile(process.argv[i], 'utf8', function (err, data) {
      if (err) {
        throw err;
      }
      console.log(data);
      i++;
      fileReader();
    });
  }
}
fileReader();
