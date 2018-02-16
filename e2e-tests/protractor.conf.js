//jshint strict: false
exports.config = {

    //allScriptsTimeout: 11000,

    specs: [
        'scenarios.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        //defaultTimeoutInterval: 30000
    }

};