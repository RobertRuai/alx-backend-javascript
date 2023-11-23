const express = require('express');

const app = express();
const host = 'localhost';
const port = 7865;

app.get('/cart', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on ${host} port ${port}`);
});

module.exports = app;
