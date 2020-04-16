/* eslint-env node */
const balm = require('balm');
const config = require('./config/balmrc');
const publish = require('./config/publish');

balm.config = config;

balm.go(mix => {
  publish(mix);

  if (mix.env.isDev) {
    mix.copy('node_modules/font-awesome/fonts/*', 'app/fonts');
  }
});
