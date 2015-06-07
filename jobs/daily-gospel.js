// Forecast Job
var format = require('string-template');
var path = require('path');
var Email = require(path.resolve(__dirname, '../util/email'));
var WebScraper = require(path.resolve(__dirname, '../util/web-scraper'))();
 
// Make Job
var CronJob = require('cron').CronJob;
new CronJob('0 8 * * *', job, null, true, 'America/Denver');

// Add Email command
WebScraper.addCommand('emailLinks', function(finished){

    this.getAttribute('.hero__box--small a', 'href', function(err, hrefs) {
        emailLinks(hrefs || [], finished);
    })

});

// Job Function
function job() {

    console.log('Running daily gospel job:', new Date());
    WebScraper
        .init()
        .url('https://lds.org')
        .emailLinks()
        .end();

};

function emailLinks(links, finished) {

    if (links.length) {
        var message = format('Hi Sean,<br><br>Here are your daily gospel links!<br><br>{0}', links.join('<br><br>'))
        console.log(message);
        // Email.send('sean.daryl.hill@gmail.com', 'Gospel Links', message);
    }

    return finished();

};

job();
