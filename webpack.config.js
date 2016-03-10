'use strict';

import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  devServer: {
    noInfo: true
  },
  entry: [
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
