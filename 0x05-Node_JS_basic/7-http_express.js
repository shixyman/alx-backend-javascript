#!/usr/bin/node

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filename = process.argv[2];

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }

    const lines = data.trim().split('\n');
    const students = lines.filter((line) => line.trim() !== '').map((line) => line.split(','));
    const numStudents = students.length;

    let response = 'This is the list of our students\n';
    response += `Number of students: ${numStudents}\n`;
    response += 'First name | Last name | Score\n';
    response += '--------- | --------- | -----\n';

    for (const [firstName, lastName, score] of students) {
      response += `${firstName} | ${lastName} | ${score}\n`;
    }

    res.send(response);
  });
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
