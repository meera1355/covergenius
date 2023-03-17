const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: 'https://www.rentalcover.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
