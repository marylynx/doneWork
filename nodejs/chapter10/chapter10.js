/*var http = require('http');
var server = http.createServer(function(request, response) {
  //console.log(request.headers );
  var url = require('url');
	//console.log(url);
	var url_parts = url.parse(request.url, true);
	console.log(url_parts);
	
});
server.listen(8080, 'localhost');*/


/*
var url = require('url');
console.log( url.parse(
    'http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true
  ));


*/
/*
var http = require('http'),
    url = require('url');
var server = http.createServer().listen(8080, 'localhost');
server.on('request', function(req, res) {
  var url_parts = url.parse(req.url, true);
  switch(url_parts.pathname) {
    case '/':
    case '/index.html':
      res.write('<html><body>Hello!</body></html>');
      break;
    default:
      res.write('Unknown path: ' + JSON.stringify(url_parts));
  }
  res.end();
});*/

/*

var map = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.txt': 'text/text'
};
var ext = require('path').extname('1.txt');
console.log(ext);
if(map[ext]) {
  console.log('Content-type', map[ext]);
}
*/


// HTTPS
var https = require('https');
// read in the private key and certificate
var pk = fs.readFileSync('./privatekey.pem');
var pc = fs.readFileSync('./certificate.pem');
var opts = { key: pk, cert: pc };
// create the secure server
var serv = https.createServer(opts, function(req, res) {
  console.log(req);
  res.end();
});
// listen on port 443
serv.listen(443, '0.0.0.0');

