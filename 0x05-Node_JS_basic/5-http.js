#!/usr/bin/node

const http = require('http');
const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');

        const fields = new Set();
        const studentsPerField = {};

        for (const line of students) {
          const [firstName, field] = line.split(',');
          fields.add(field.trim());
          if (studentsPerField[field]) {
            studentsPerField[field.trim()].push(firstName);
          } else {
            studentsPerField[field.trim()] = [firstName];
          }
        }

        console.log(`Number of students: ${students.length}`);

        for (const field of fields) {
          console.log(`Number of students in ${field}: ${studentsPerField[field].length}. List: ${studentsPerField[field].join(', ')}`);
        }

        resolve();
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    const filePath = path.join(__dirname, process.argv[2]);
    countStudents(filePath)
      .then(() => res.end())
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
