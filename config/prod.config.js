const baseConfig = require('./base.config.js');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'decorators.min': './lib/decorators.js',
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
});
