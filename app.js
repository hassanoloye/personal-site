const express = require('express');
const path = require('path');

// Set up the express app
const app = express();

app.use(express.static(path.join(__dirname, 'build/')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
