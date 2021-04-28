const path = require('path');

const externalLibs = [
  path.resolve(__dirname, '../node_modules/react-native'),
  path.resolve(__dirname, '../node_modules/react-native-appearance'),
  path.resolve(__dirname, '../node_modules/react-native-web'),
];

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    // include: externalLibs,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-expo'],
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    include: externalLibs,
    // exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-expo'],
        },
      },
    ],
  });

  config.resolve.alias = {
    // replace `react-native` imports with `react-native-web`
    // 'react-native$': require.resolve('react-native-web'),
  };

  config.resolve.extensions.push('.ts', '.tsx', '.web.js', '.web.tsx');

  return config;
};
