const { defineConfig } = require("cypress");
const moment = require('moment');

const dateTime = moment().format('DD-MM-YYYY_HH-mm-ss');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pops.ons.org.br/ons.pop.federation/?wa=wsignin1.0&wtrealm=https%3a%2f%2fsintegre.ons.org.br%2f_trust%2fdefault.aspx&wctx=https%3a%2f%2fsintegre.ons.org.br%2f_layouts%2f15%2fAuthenticate.aspx%3fSource%3d%252F&wreply=https%3a%2f%2fsintegre.ons.org.br%2f_trust%2fdefault.aspx',
    video: true,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: `cypress/reports/${dateTime}`,
    reportFilename: "[name]-report",
    quiet: true,
    overwrite: false,
    html: true,
    json: false,
  },
  screenshotsFolder: `cypress/reports/${dateTime}/evidências`,
  chromeWebSecurity: false,
  
});