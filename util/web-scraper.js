// Web Scraper

var webdriverio = require('webdriverio');
var client;

module.exports = function() {

	var options = {
	    desiredCapabilities: { 
	        browserName: 'chrome'
	    } 
	};

	return webdriverio.remote(options);
	
};