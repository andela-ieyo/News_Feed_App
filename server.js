const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(4000, () => {
  console.log('Express server is up on port 4000');
});
