const http = require('http');

const students = require('./3-read_file_async');
const host = 'localhost';
const port = 1245;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write('Hello Holberton School!');
      res.end();
      break
    case "/students":
      res.write('This is the list of our students\n');
      students(process.argv[2]).then((data) => {
        res.write(`Number of students: ${data.students.length}\n`);
        res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
        res.end();
    }).catch((err) => res.end(err.message));
  }
});

const app = server.listen(port, host);

module.exports = app;
