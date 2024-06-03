#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
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

module.exports = countStudents;
