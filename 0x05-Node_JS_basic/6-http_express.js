const express = require('express');

const host = 'localhost';
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
