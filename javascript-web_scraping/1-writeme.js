#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];
const str = process.argv[3];
fs.writeFile(filePath, str, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});
