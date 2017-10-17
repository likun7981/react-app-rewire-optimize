const { getBabelLoader } = require('react-app-rewired');

module.exports = (config, env) => {
  if (env === 'production') {
    const loader = getBabelLoader(config.module.rules);
    if (!loader) {
      console.log('babel-loader not found');
      return config;
    }
    const options = loader.options || loader.query;
    options.presets = ['react-optimize'].concat(options.presets || []);
  }
  return config;
};
