var email = require('./util/email');

email.send('sean.daryl.hill@gmail.com', 'hi dude', 'Buddy joe', function(err){
    console.log(err);
});