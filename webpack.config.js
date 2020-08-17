'use strict';

const { resolve } = require('path');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
    plugins: [
      'babel-plugin-styled-components',
      [
        '@wordpress/babel-plugin-import-jsx-pragma',
        {
          scopeVariable: 'h',
          scopeVariableFrag: 'Fragment',
          source: 'preact',
          isDefault: false,
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        { pragma: 'h', pragmaFrag: 'Fragment' },
      ],
    ],
  },
};

const urlLoader = {
  loader: 'url-loader',
  options: { limit: 1024 },
};

const rules = [
  {
    test: /\.jsx?$/,
    include: resolve(__dirname, 'front'),
    use: [babelLoader],
  },
  {
    test: /\.png$/,
    include: resolve(__dirname, 'front', 'assets'),
    use: [urlLoader],
  },
  {
    test: /\.ya?ml$/,
    type: 'json',
    use: 'yaml-loader',
  },
];

const config = {
  mode: process.env.NODE_ENV || 'development',
  context: resolve(__dirname, 'front'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'public', 'assets'),
    publicPath: '/assets',
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
};

module.exports = config;
