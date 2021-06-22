const creatorConfig = require('../utils/creator.config')

module.exports.config = creatorConfig({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless'] // Useful for Continuous Integration
    }
  },
  directConnect: true
})
