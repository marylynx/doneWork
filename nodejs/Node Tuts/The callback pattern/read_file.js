var fs = require('fs');

function handleError(err){
	console.log(err);
}

var result = fs.readFile('ect/passwd', function(err, res){
	if(err) return handleError(err);
	console.log('File content:', result);
});


