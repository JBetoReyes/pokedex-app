const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: ['react', 'react-dom'],
  },
  mode: 'production',
  output: {
    path: resolve(__dirname, '..', 'dist'),
    filename: '[name]_[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      // Name of the library defined above
      name: '[name]',
      path: resolve(__dirname, '..', 'dist', '[name]-manifest.json'),
    }),
  ],
};
