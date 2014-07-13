var fs = require('fs');

var readStream = fs.createReadStream('system.log');

readStream.pause();

readStream.on('data', function(data){
	console.log('got data: ', data);

	readStream.pause();

	setTimeout(function(){
		readStream.resume();
	}, 1000);
});

readStream.on('end', function(){
	console.log('ended!');
});

readStream.setEncoding('utf-8');

setTimeout(function(){
	readStream.resume();
}, 1000);


















