/* eslint-env node */
const balm = require('balm');
const config = require('./config/balmrc');

balm.config = config;

balm.go(mix => {
  if (mix.env.isDev) {
    mix.copy('node_modules/font-awesome/fonts/*', 'app/fonts');
  }
});
