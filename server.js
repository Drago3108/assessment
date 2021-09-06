const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Aigilx Helath App 1')
});

app.get('/test', (req, res) => {
  res.send('Aigilx Helath App 2')
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}!`)
});

