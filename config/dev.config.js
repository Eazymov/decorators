
const path = require('path');
const baseConfig = require('./base.config.js');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  entry: {
    'index': './static/src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, '../static/dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: './static',
  },
});
