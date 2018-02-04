var debug = true;
exports.config = {
    debug: debug, specs: debug ? ['tests/tests/authorization.test.js'] :['tests/tests/*.js'],
    maxInstances: debug ? 1 : 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        chromeOptions: {
          args: [
              // 'window-size=414,736'
          ]
        }
    }],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    bail: 0,
    screenshotOnReject: false,
    screenshotPath: false,
    baseUrl: 'https://s3.amazonaws.com/soliddemoonline/php/int/natalie/natalietest.html',
    waitforTimeout: debug ? 99999999 : 100000,
    connectionRetryTimeout: debug ? 99999999 : 100000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: debug ? 99999999 : 900000
    },
    services: ['selenium-standalone'],
    reporters: ['dot', 'teamcity']
};