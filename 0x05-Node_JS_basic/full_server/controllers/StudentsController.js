const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';

      const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b));
      for (const field of sortedFields) {
        response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(process.argv[2]);
      if (fields[major]) {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
