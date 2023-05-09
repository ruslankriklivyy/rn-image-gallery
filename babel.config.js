module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          screens: './src/screens',
          config: './src/config',
          api: './src/api',
          navigation: './src/navigation',
          store: './src/store',
          types: './src/types',
          src: './src',
        },
      },
    ],
  ],
};
