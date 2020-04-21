const { resolve } = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.tsx',
    '../src/common/components/**/*.stories.tsx',
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
      Assets: resolve(__dirname, '..', 'public', 'assets/'),
    };
    return config;
  },
};
