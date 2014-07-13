var fs = require('fs');

var writeStream = fs.createWriteStream('write.txt');

var interval = setInterval(function (){
	writeStream.write((new Date()).toString() + '\n');
}, 100);

setTimeout(function(){
	clearInterval(interval);
	writeStream.end();
}, 1000);


















