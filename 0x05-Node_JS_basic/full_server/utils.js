const fs = require('fs');

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const fields = {};

        for (const line of lines) {
          if (line.trim() !== '') {
            const [firstName, lastName, field] = line.split(',');
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          }
        }

        resolve(fields);
      }
    });
  });
};

module.exports = { readDatabase };
