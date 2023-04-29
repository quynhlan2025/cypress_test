const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    defaultCommandTimeout: 30000,
    baseUrl: 'https://react-redux.realworld.io',
  
    requestTimeout: 60000,
    responseTimeout: 80000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
   
  },
});
