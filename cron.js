// Cron Manifest

console.log('Cron Server Started');

var path = require('path');
var jobPath = path.resolve(__dirname, './jobs');
var Selenium = require(path.resolve(__dirname, './util/selenium'));

// Start jobs
require(jobPath + '/forecast');
// require(jobPath + '/daily-gospel');

// Start Selenium
Selenium.go();