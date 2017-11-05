
const path = require('path');
const baseConfig = require('./base.config.js');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  entry: {
    'index': './static/src/index.js',
  },
  devServer: {
    contentBase: './static',
  },
});
