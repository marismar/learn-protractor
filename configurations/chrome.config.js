const creatorConfig = require('../utils/creator.config');

module.exports.config = creatorConfig({
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless'], // Useful for Continuous Integration
    },
  },
  directConnect: true,
});
