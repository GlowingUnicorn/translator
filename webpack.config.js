/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    static: ['./dist'],
    hot: true
  },
  stats: {
    colors: true,
    reasons: false,
    chunks: false,
    errors: true,
    errorDetails: false,
    hash: false,
    logging: 'warn',
    modules: false,
    moduleTrace: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    assets: false,
    entrypoints: false
  },
  context: __dirname,
  entry: {
    app: ['./app/ts/index.tsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules|vendor/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  infrastructureLogging: {
    level: 'warn'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /(node_modules|vendor)/
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules|vendor)/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new StylelintWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules', 'vendor']
    }),
    new webpack.ProvidePlugin({
      // jQuery: 'jquery',
      // Tether: 'tether',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html.ejs',
      hash: true,
      chunksSortMode: 'manual',
      chunks: ['vendor', 'app'],
      appMountId: 'app'
    }),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    })
  ],
  resolve: {
    modules: ['node_modules', 'vendor'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.less'],
    alias: Object.assign({}, getAliasesForDir('./app/ts/'), {
      'react-dom': '@hot-loader/react-dom'
    })
  }
}

function getAliasesForDir(dir) {
  return fs.readdirSync(dir).reduce((acc, subDir) => {
    acc['~' + subDir] = path.resolve(path.join(__dirname, dir, subDir))

    return acc
  }, {})
}
