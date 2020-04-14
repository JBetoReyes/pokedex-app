const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.export = {
  entry: './src/index.tsx',
  output: {
    filename: '[name]-[hash:6].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    })
  ]
}
