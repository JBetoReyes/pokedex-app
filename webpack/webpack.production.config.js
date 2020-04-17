const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConf = require('./webpack.base.config');

module.exports = (env) => ({
  ...merge(baseConf(env), {
    mode: 'production',
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name]_[hash].css',
      }),
      new webpack.DllReferencePlugin({
        manifest: resolve(__dirname, '..', 'dist', 'modules-manifest.json'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s?css$/,
          loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
  }),
});
