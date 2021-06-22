module.exports = providerConfig => {
  const defaultConfig = {
    baseUrl: 'https://lit-chamber-61567.herokuapp.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => browser.waitForAngularEnabled(false), // It is not an angular app
    jasmineNodeOpts: { random: true } // Tests do not need ordered execution
  }

  return Object.assign({}, defaultConfig, providerConfig)
}
