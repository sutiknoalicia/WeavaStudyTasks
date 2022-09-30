const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      this.watchForFileChanges = true
    },
  },
  defaultCommandTimeout: 10000
});
