/*
var Foo = function (name) { this.data = [1, 2, 3];  this.name = name; };
//self.data = [1, 2, 3]; // setting a non-primitive property
Foo.prototype.showData = function () { console.log(this.name, this.data); };
 
var foo1 = new Foo("foo1");
var foo2 = new Foo("foo2");
 
// both instances use the same default value of data
foo1.showData(); // "foo1", [1, 2, 3]
foo2.showData(); // "foo2", [1, 2, 3]
 
// however, if we change the data from one instance
foo1.data.push(4);
 
// it mirrors on the second instance
foo1.showData(); // "foo1", [1, 2, 3, 4]
foo2.showData(); // "foo2", [1, 2, 3, 4]*/
/*
function Animal(name) {
  this.name = name;
};
Animal.prototype.move = function(meters) {
  console.log(this.name+" moved "+meters+"m.");
};

function Snake() {
  Animal.apply(this, Array.prototype.slice.call(arguments));
};
Snake.prototype = new Animal();
Snake.prototype.move = function() {
  console.log("Slithering...");
  Animal.prototype.move.call(this, 5);
};

var sam = new Snake("Sammy the Python");
console.log(sam.toString());
sam.move();*/

(Function.prototype.curry = function() {
  var fn = this;
  var i = 0;
  var args = Array.prototype.slice.call(arguments);
  console.log(i + ' ' + args);
  i++;
  console.log( args.concat(Array.prototype.slice.call(arguments)));
  return function() {
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
  };
})();

function foo(a, b, c) { console.log(a, b, c); }

var bar = foo.curry('Hello');
bar('World', '!');







