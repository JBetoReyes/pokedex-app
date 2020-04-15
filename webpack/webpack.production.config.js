const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConf = require('./webpack.base.config');

module.exports = (env) => ({
  ...merge(baseConf(env), {
    mode: 'production',
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name]_[hash].css',
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
