#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const data = JSON.parse(body);
  const todos = {};

  data.forEach(task => {
    const userId = task.userId;
    if (task.completed) {
      if (!todos[userId]) {
        todos[userId] = 1;
      } else {
        todos[userId]++
      }
    }
  });
  console.log(todos);
});
