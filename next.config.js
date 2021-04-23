// @generated: @expo/next-adapter@2.1.5
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/guides/using-nextjs.md
const path = require('path');
const env = require('dotenv').config();
const webpack = require('webpack');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['expo-next-react-navigation'],
      },
    ],
    withFonts,
    withImages,
    [withExpo, { projectRoot: __dirname }],
  ],
  {
    i18n: {
      locales: ['en', 'zh-HK', 'zh-TW'],
      defaultLocale: 'zh-HK',
    },
    reactStrictMode: true,
    // load env
    webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(env));
      return config;
    },
  },
);
