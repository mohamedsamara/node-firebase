/* eslint-disable */

'use strict';

const path = require('path');
const merge = require('webpack-merge');
const { HashedModuleIdsPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(CURRENT_WORKING_DIR, 'build/client'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              publicPath: 'images',
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              publicPath: '../fonts',
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true
          }
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(CURRENT_WORKING_DIR, 'client/public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    // new WebpackPwaManifest({
    //   name: 'Node Firebase',
    //   short_name: 'NodeFirebase',
    //   description: 'Node Firebase!',
    //   background_color: '#fff',
    //   theme_color: '#4a68aa',
    //   inject: true,
    //   ios: true,
    //   icons: [
    //     {
    //       src: path.resolve('client/public/images/pwa.png'),
    //       destination: 'images',
    //       sizes: [72, 96, 128, 144, 192, 384, 512]
    //     },
    //     {
    //       src: path.resolve('client/public/images/pwa.png'),
    //       sizes: [120, 152, 167, 180],
    //       destination: 'images',
    //       ios: true
    //     }
    //   ]
    // }),
    new OptimizeCssAssetsPlugin({}),
    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    })
  ]
});
