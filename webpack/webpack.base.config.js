const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: resolve(__dirname, '..', 'src', 'index.tsx'),
  output: {
    filename: 'app-[name]-[hash:6].js',
    path: resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'public', 'index.html'),
      filename: 'index.html',
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, '..', 'dist', 'modules-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: resolve(__dirname, '..', 'dist', '*.dll.js'),
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/app*'],
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
