// Jonan comment 1: to complete task 23 I needed to follow the guide here
// https://devcenter.heroku.com/articles/nodejs-support#package-installation:
// "Skip pruning If you need access to packages
// declared under devDependencies in a different buildpack or at runtime,
// then you can set NPM_CONFIG_PRODUCTION=false or YARN_PRODUCTION=false to skip the pruning step."

// $ heroku config:set NPM_CONFIG_PRODUCTION=false


// Jonan comment 2: To troubleshoot this issue, on your local command line,
// I needed to follow the guide here: https://devcenter.heroku.com/articles/deploying-nodejs
// typing the following cmd:

// rm -rf node_modules; npm install --production

// then ran the app locally by typing:

// heroku local web

// If a dependency is missing from your package.json file,
// you should see an error that says which module cannot be found.