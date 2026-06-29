const { defineConfig } = require("cypress");
const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin");


module.exports = defineConfig({
    reporter: 'mochawesome',
    allowCypressEnv: false,
    projectId: "4ngizh",
    e2e: {
        baseUrl: 'https://restful-booker.herokuapp.com',
        setupNodeEvents(on, config) {
            cypressGrepPlugin(config);

            return config;
        },
    },
});