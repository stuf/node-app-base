const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'index.js'),
  target: 'node',
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};

module.exports = config;
