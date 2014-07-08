/*var fs = require('fs');
fs.rename('/mnt/common/Hello-World/nodejs/chapter11/new.txt', '/mnt/common/Hello-World/nodejs/chapter11/new1.txt', function (err) {
	if (err) throw err;
		console.log('renamed complete');
  
	fs.stat('/mnt/common/Hello-World/nodejs/chapter11/new1.txt', function (err, stats) {
		if (err) throw err;
		console.log('stats: ' + JSON.stringify(stats));
	});
});

*/
/*
var fs = require('fs');
fs.open('/mnt/common/Hello-World/nodejs/chapter11/new1.txt', 'a+', function(err, fd) {
  if(err) throw err;
  var buf = new Buffer('bbbbb\n');
  fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
    if(err) throw err;
    console.log(err, written, buffer);
    fs.close(fd, function() {
      console.log('Done');
    });
  });
});
*/
/*
var fs = require('fs');
 fs.open('/mnt/common/Hello-World/nodejs/chapter11/new1.txt', 'r', function(err, fd) {
    if(err) throw err;
    var buf = new Buffer(3);
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
      if(err) throw err;
      console.log(err, bytesRead, buffer);
      fs.close(fd, function() {
        console.log('Done');
      });
    });
  });
 */
 
	var fs = require('fs');
	var file = fs.createReadStream('/mnt/common/Hello-World/nodejs/chapter11/results.txt', {flags: 'r'} );
	var out = fs.createWriteStream('/mnt/common/Hello-World/nodejs/chapter11/results2.txt', {flags: 'w'});
	out.write('HELLO!\n');
	file.on('data', function(data) {
		console.log('data', data);
		out.write(data);
	});
	file.on('end', function() {
		console.log('end');
		out.end(function() {
			console.log('Finished writing to file');
			console.log('Done');
		});
	});
  
  