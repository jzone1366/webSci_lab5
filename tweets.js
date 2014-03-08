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

var i = 0;
var tweets = [];

twit.stream('statuses/sample', function(stream) {

		stream.on('error', function(error, code) {
			console.log("My error: " + error + ": " + code);
		});
		
		stream.on('data', function (data) {
			if(i < 1000) {
				if(i % 20 == 0) {
					console.log(i);
				}
				tweets.push(data);
				i++;
			}
			else if(i == 1000){
				fs.writeFile('ITWS4200-lab5-zonej.json', JSON.stringify(tweets, null, 4), function(err){
					if(err) throw err;
					console.log("Tweets saved to file!");
					console.log("You can now close the connection");
					i++;
				});
			}
		});
});