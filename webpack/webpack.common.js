/* eslint-disable */

'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  entry: [path.join(CURRENT_WORKING_DIR, 'client/app/index.js')],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   loader: 'eslint-loader',
      //   exclude: /(node_modules)/,
      //   options: {
      //     emitWarning: process.env.NODE_ENV !== 'production'
      //   }
      // },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.html']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'client/public' }]
    })
  ]
};
