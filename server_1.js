const express = require('express')
const app = express();
const port = 8001;

app.get('/', (req, res) => {
  res.send('Aigilx Helath App 3')
});

app.get('/test', (req, res) => {
  res.send('Aigilx Helath App 4')
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}!`)
});

