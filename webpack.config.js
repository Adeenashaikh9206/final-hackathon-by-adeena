// webpack.config.js
module.exports = {
    // ...other config options...
    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.my-cache-directory'), // aapka custom cache folder
      compression: false,
    },
  };
  