const webpack = require('webpack');
// require('./utils/log');

const assetPrefix = '';
const moduleExports = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SERVER__: isServer,
      })
    );
    return config;
  },
  assetPrefix: assetPrefix,
  publicRuntimeConfig: {
    kenv: '',
  },
};

module.exports = moduleExports;
