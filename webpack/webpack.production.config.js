const merge = require('webpack-merge');
const base = require('./webpack.base.config');
module.exports = merge(require('./webpack.base.config'), {
  mode: 'production'
});
