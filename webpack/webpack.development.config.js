const merge = require('webpack-merge');
const { resolve } = require('path');
const baseConf = require('./webpack.base.config');

module.exports = (env) => ({
  ...merge(baseConf(env), {
    mode: 'development',
    devServer: {
      contentBase: resolve(__dirname, '..', 'dist'),
      host: '0.0.0.0',
      open: true,
    },
  }),
});
