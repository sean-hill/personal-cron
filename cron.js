// Cron Manifest

console.log('Cron Server Started');

var path = require('path');
var jobPath = path.resolve(__dirname, './jobs');

require(jobPath + '/forecast');