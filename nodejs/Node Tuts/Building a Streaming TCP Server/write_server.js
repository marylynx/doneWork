var net = require('net');

var server = net.createServer();

var JSONStream = require('json-stream');

var filePath = __dirname + '/logs.json';

var file = require('fs')
	.createWriteStream(filePath, {flags: 'a'});

var es = require('event-stream');

function identity(d){
	return d;
}

var sourse = es.mapSync(identity);

var stringifier = es.mapSync(function(data){
	return JSON.stringify(data) + '\n';
});

sourse
	.pipe(stringifier)
	.pipe(file);

server.on('connection', function(socket){
	var jsonStream = new JSONStream();
	socket
		.pipe(jsonStream)
		.pipe(sourse, {end: false});

});

server.listen(4000);