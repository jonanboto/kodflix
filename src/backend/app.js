const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const movieData = require('./movieData');

const path = require('path');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('/rest/movies', (req, res) => res.send(movieData()));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) { res.sendFile(path.join(__dirname, '../../build', 'index.html')); });
