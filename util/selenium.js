// Selenium Standalone with Xvfb

var selenium = require('selenium-standalone');
var Xvfb = require('xvfb');
var xvfb = new Xvfb();
var async = require('async');
var path = require('path');

exports.go = function(finished) {

	async.series([

		// Xvfb
		function (done) {
			xvfb.start(done);
		},

		// Selenium install
		function (done) {
			selenium.install({
				logger: function (message) { }
			}, done);
		},

		// Selenium start
		function (done) {
			selenium.start(function (err, child) {

				if (err) {
					return done(err);
				}

				child.stderr.on('data', function(data){
					console.log(data.toString());
				});

				selenium.child = child;

				return done();

			});
		}

	], function(err) {

		if (err) {
			console.log('Selenium startup error:', err);
		}
		else {
			console.log('Selenium listening!');
		}

		require(path.resolve(__dirname, '../jobs/daily-gospel'));

		if (finished) {
			return finished();
		}

	});

};

function end() {

	if (selenium && selenium.child) {
		console.log('Killing selenium with PID:', selenium.child.pid);
		selenium.child.kill();
	}

	if (xvfb) {
		console.log('Killing xvfb');
		xvfb.stopSync();
	}

	process.exit(1);

};

exports.end = end;

process.on('SIGINT', end);
process.on('SIGTERM', end);
