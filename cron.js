// Cron Manifest

var path = require('path');
var jobPath = path.resolve(__dirname, './jobs');

require(jobPath + '/forecast');