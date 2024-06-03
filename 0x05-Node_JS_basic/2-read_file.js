#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fields = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '') {
        continue;
      }
      const [field, name] = lines[i].split(',');
      if (!fields[field]) {
        fields[field] = [name.trim()];
      } else {
        fields[field].push(name.trim());
      }
      totalStudents++;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = countStudents;
