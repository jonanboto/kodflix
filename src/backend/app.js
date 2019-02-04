const express = require('express')
const app = express()
const port = 3001;
const movieData = require('./movieData');

app.get('/rest/movies', (req, res) => res.send(movieData()))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
