const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "4ngizh",

  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    setupNodeEvents(on, config) {
      // CORREÇÃO: Removido o '/src/plugin' do caminho
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});