/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
module.exports = merge(require('./webpack.base.config'), {
  mode: 'production',
});
