#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  let count = 0;
  const movie = JSON.parse(body);
  movie.results.forEach(movie => {
    movie.characters.forEach(characters => {
      if (characters.includes('/people/18')) count++;
    });
  });
  console.log(count);
});
