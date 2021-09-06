const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Aigilx Helath CI/CD Pipeline')
});

app.get('/test', (req, res) => {
  res.send('Aigilx Helath CI/CD Pipeline')
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}!`)
});

