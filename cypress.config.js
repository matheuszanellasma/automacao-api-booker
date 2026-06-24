const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "4ngizh",

  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    setupNodeEvents(on, config) {
      // REGISTRA O PLUGIN DE TAGS PARA CONSEGUIR FILTRAR NO GITHUB ACTIONS:
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});