'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/get', (req, res) => {
  res.status(200).send({ "id": 1, "title": "test", "author": "fred" });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
