const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Test</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    })
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.scss$/,
         use: [
           'style-loader',
           {loader: 'css-loader',
           options: {
             sourceMap: true
           }
         },
           {loader: 'resolve-url-loader',
           options: {
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
        test: /\.(png|jpe?g|gif)$/i,
        use: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    },
    historyApiFallback: true,
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;