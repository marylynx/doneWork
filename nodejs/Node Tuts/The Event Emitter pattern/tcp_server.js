var net = require('net');
var format = require('util').format;

var server = net.createServer();

server.on('connection', function(conn){
	var printPrefix = '[' + conn.remoteAdress + ':' + conn.remotePort + ']';
	
	function print(){
		var formatted = format.apply({}, arguments);
		console.log(printPrefix + formatted);
	}
	print('connected!');
	
	conn.on('data', function(data){
		print('got data: ', data);
	});
	
	conn.on('end', function(data){
		print('ended!');
	});
	
	conn.on('error', function(err){
		print('erroe: ', err);
	});
	
});

















