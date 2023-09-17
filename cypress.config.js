const { debug } = require("console");
const { defineConfig } = require("cypress");
// promisified fs module
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    "cypress/e2e/",
    "config",
    `${file}.json`
  );
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  pluginsFolder: 'cypress/e2e/plugins',
  reporterOptions: {
    reportDir: 'cypress/reports/results',
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  screenshotsFolder: 'cypress/reports/screenshots',
  e2e: {
    supportFile: 'cypress/support/e2e.js',

    defaultCommandTimeout: 30000,
    baseUrl: "https://raksul.github.io/recruit-qa-engineer-work-sample/",
    requestTimeout: 60000,
    responseTimeout: 80000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', (details) => {
 
      })
      const envFileName = `.env.${process.env.NODE_ENV || "development"}`;

      const file = config.env.configFile || "development"|| "dev";
      if(config.env.configFile!==undefined){
        console.log(`get config.env.configFile :${config.env.configFile}`);
        require('dotenv').config({ path: `.env.${file}` })
  

      }
      console.log(`get process.env.NODE_EN :${process.env.NODE_ENV}`);
      console.log(`process.env.VITE_APP_URL :${process.env.VITE_APP_URL}`);
      
      // return getConfigurationByFile(file)
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
