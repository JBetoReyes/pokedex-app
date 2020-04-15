const merge = require('webpack-merge');
const baseConf = require('./webpack.base.config');

module.exports = (env) => ({
  ...merge(baseConf(env), {
    mode: 'production',
  }),
});
