const path = require('path');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      "package": path.resolve(__dirname, '..', './'),
    },
  },
  devServer: {
    contentBase: './static',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
