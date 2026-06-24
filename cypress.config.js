const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "4ngizh",

  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    setupNodeEvents(on, config) {
      // CORREÇÃO OFICIAL DO PLUGIN:
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin');
      cypressGrepPlugin(config);
      return config;
    },
  },
});