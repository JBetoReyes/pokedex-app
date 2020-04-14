/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, '..', 'src', 'index.tsx'),
  output: {
    filename: '[name]-[hash:6].js',
    path: resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
        },
      },
    ],
  },
};
