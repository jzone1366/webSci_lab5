var twitter = require('ntwitter');
var fs = require('fs');

var twit = new twitter({
	consumer_key: '5UMbMiZmyfmZIv4w4wIvA',
	consumer_secret: '4XbLRKae0JnngpHyvgXm1K0dnmHYjKGwsZhHrfychy0',
	access_token_key: '110624472-7wxnUD6uIdDYnwLAEIucjtVe1jn6oMWgwd4Oytmp',
	access_token_secret: 'wfgF941yxA0xt2eg6QPUPpI2p5KBCJY3j9OOhir3gsFHF'
});

var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'} );
	response.end('Hello HTTP!');
}).listen(8000);

console.log('Listening on http://127.0.0.1:8000');

var sw = '-73.68,42.72', ne = '-73.67,42.73';
var options = {encoding: 'utf8'};
var writeStream = fs.createWriteStream('out.json');
var count = 1;

twit.stream('statuses/filter', {'locations':sw + ',' + ne},
	function(stream) {
		stream.on('error', function(error, code) {
  				 console.log("My error: " + error + ": " + code);
		});
		stream.on('data', function (data) {
			jdata = JSON.stringify(data, null, 4);
			writeStream.on('error', function(err) {
				console.log(err);
			});
			writeStream.write(jdata);
			console.log(count);
			count++;
		});
});