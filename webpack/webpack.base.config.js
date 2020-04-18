const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = (env) => {
  const projectPath = resolve(__dirname, '..');
  const basePath = resolve(projectPath, '.env');
  const envPath = `${basePath}.${env.ENVIRONMENT}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce(
    (keys, nextKey) => ({
      ...keys,
      [`process.env.${nextKey}`]: JSON.stringify(fileEnv[nextKey]),
    }),
    {}
  );
  return {
    entry: resolve(__dirname, '..', 'src', 'index.tsx'),
    output: {
      filename: 'app-[name]-[hash:6].js',
      path: resolve(__dirname, '..', 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        Assets: resolve(__dirname, '..', 'public', 'assets/'),
      },
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, '..', 'public', 'index.html'),
        filename: 'index.html',
      }),
      new AddAssetHtmlPlugin({
        filepath: resolve(__dirname, '..', 'dist', '*.dll.js'),
      }),
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: ['**/app*'],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'awesome-typescript-loader',
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
};
