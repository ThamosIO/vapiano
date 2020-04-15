'use strict';

const { resolve } = require('path');
const express = require('express');
const api = require('./api/index.js');

const app = express();

app.use('/api', api);

if (app.get('env') === 'development') {
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const options = require('./webpack.config.js');

  const compiler = webpack(options);

  app.use(middleware(compiler, { publicPath: options.output.publicPath }));
}

app.use(express.static(resolve(__dirname, 'public')));

app.get('*', (req, res) =>
  res.sendFile(resolve(__dirname, 'public', 'index.html'))
);

module.exports = app;
