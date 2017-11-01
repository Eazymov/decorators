const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './lib/decorators.js',
  output: {
    filename: 'decorators.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {

      },
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
};
