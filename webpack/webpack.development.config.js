const merge = require('webpack-merge');
const { resolve } = require('path');

module.exports = merge(require('./webpack.base.config'), {
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, '..', 'dist'),
    host: '0.0.0.0',
    hot: true,
    open: true,
  },
});
