/*var fs = require("fs");
var data = fs.readFileSync('/etc/passwd');
console.log(data);*/

/*
// Async task (same in all examples in this chapter)
function async(arg, callback) {
  console.log('do something with \''+arg+'\', return 1 sec later');
  setTimeout(function() { callback(arg * 2); }, 1000);
}
// Final task (same in all the examples)
function final() { console.log('Done', results); }

// A simple async series:
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
function series(item) {
  if(item) {
    async( item, function(result) {
      results.push(result);
      return series(items.shift());
    });
  } else {
    return final();
  }
}
//series(items.shift());

console.log(items.shift());*/



function async(arg, callback) {
  console.log('do something with \''+arg+'\', return 1 sec later');
  setTimeout(function() { callback(arg * 2); }, 1000);
}
function final() { console.log('Done', results); }

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

items.forEach(function(item) {
  async(item, function(result){
    results.push(result);
    if(results.length == items.length) {
      final();
    }
  })
});
/*
var final = function (){
	var args = Array.prototype.slice.call(arguments);
	console.log(args);
}*/

series([
  function(next) { async(1, next); },
  function(next) { async(2, next); },
  function(next) { async(3, next); },
  function(next) { async(4, next); },
  function(next) { async(5, next); },
  function(next) { async(6, next); }
], final);


next(1, 2, 3, 4) 