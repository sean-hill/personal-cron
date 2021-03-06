// Forecast Job
var format = require('string-template');
var path = require('path');
var mesaLoc = [33.428580, -111.657396];
var Forecast = require('forecast');
var Email = require(path.resolve(__dirname, '../util/email'));
 
// Initialize Forecast
var forecast = new Forecast({
    service: 'forecast.io',
    key: 'e52c941b8bcc68555076798bd03d94e6',
    units: 'farenheit'
});

// Make Job
var CronJob = require('cron').CronJob;
new CronJob('30 9 * * *', job, null, true, 'America/Denver');

// Job Function
function job() {

    console.log('Running forcast job:', new Date());

    forecast.get(mesaLoc, function(err, weather) {

        var summary = format(
            '<strong>Right Now:</strong> {0}<br>' +
            '<strong>Next Hour:</strong> {1}<br>' + 
            '<strong>Next 24 Hours:</strong> {2}<br>' + 
            '<strong>Next 7 Days:</strong> {3}',
            weather.currently.summary,
            weather.minutely.summary,
            weather.hourly.summary,
            weather.daily.summary
        );

        var message = format('Here\'s your daily weather forcast! <br><br>{0}<br><br>- Pi Robot', summary);

        Email.send('sean.daryl.hill@gmail.com', 'Weather Forecast', message);
      
    });

};