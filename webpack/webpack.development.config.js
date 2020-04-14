/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base.config'), {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    open: true,
  },
});
