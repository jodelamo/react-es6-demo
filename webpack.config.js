'use strict';

import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/index.js'
    ]
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { text: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
