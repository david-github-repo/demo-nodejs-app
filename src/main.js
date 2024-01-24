const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`<h1>Hello World! Listening on port ${port}.</h1>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
