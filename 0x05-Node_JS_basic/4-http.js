const http = require('http');
const port = 1245

const server = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

const app = server.listen(port);

module.exports = app;
