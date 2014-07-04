/*var SimpleEE = function() {
  this.events = {};
};
SimpleEE.prototype.on = function(eventname, callback) {
  this.events[eventname] || (this.events[eventname] = []);
  this.events[eventname].push(callback);
};
SimpleEE.prototype.emit = function(eventname) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (this.events[eventname]) {
    this.events[eventname].forEach(function(callback) {
      callback.apply(this, args);
    });
  }
};
// Example using the event emitter
var emitter = new SimpleEE();
emitter.on('greet', function(name) {
  console.log('Hello, ' + name + '!' );
});
['foo', 'bar', 'baz'].forEach(function(name) {
  emitter.emit('greet', name);
});*/

var buffer = new Buffer('Hyvaa paivaa!'); // create a buffer containing “Good day!” in Finnish
var str = 'Hyvaa paivaa!'; // create a string containing “Good day!” in Finnish
// log the contents and lengths to console
console.log(buffer);
console.log('Buffer length:', buffer.length);
console.log(str);
console.log('String length:', str.length);