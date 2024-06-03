#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
