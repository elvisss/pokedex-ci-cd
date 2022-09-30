module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.pageLoadTimeout = 6000000
      config.supportFile = false
      return config
    },
  },
}
