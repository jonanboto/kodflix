import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/pages/App';
import * as serviceWorker from './frontend/other/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if(module.hot) {
    module.hot.accept();
}

// Jonan: not been able to successfully install heroku add-in to push local changes to git and herokU:
// https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes

// sample proposed code to add to index.js (from heroku helpdesk site, referenced above)
// const cool = require('cool-ascii-faces')
// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('/cool', (req, res) => res.send(cool()))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
