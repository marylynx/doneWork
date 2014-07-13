var dns = require('dns');

dns.lookup('google.com', function(err, ip){
	if(err) console.log(err);
	console.log('google.com resolved to %s', ip);
});


