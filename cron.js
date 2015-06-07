// Cron Manifest

console.log('Cron Server Started');

process.on('uncaughtException', function(error) {

	console.log('Cron Uncaught Error:');
	console.log(error);
	console.log(error.stack);

});

var path = require('path');
var jobPath = path.resolve(__dirname, './jobs');
var Selenium = require(path.resolve(__dirname, './util/selenium'));

// Start jobs
require(jobPath + '/forecast');
require(jobPath + '/daily-gospel');

// Start Selenium
Selenium.go();