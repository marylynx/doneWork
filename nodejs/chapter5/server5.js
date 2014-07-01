/*var arr = [ 'a', 'b', 'c', 2, 1];
arr.unshift('1'); // insert as first item
console.log(arr); // ['1','a', 'b', 'c']
console.log(arr.shift()); // remove first item
console.log(arr); // ['a', 'b', 'c']


var lookup = { 12: { foo: 'b'}, 13: { foo: 'a' }, 14: { foo: 'c' }};
console.log(Object.keys(lookup).indexOf('12')); // false 
console.log(Object.keys(lookup).indexOf(''+12)); // true


var arr = ["a", "b", "c", "d"];
function join(previousStr, currentItem, i) {
  var str = previousStr + currentItem;
  console.log(str); 
  return str;
}
var result = arr.reduce(join, ""); 
console.log("result = " + result);


var arr = [1, 2, 3, 4];
function square(number) {
  return number * number;
}
var squaredArr = arr.map(square);
console.log(squaredArr); 


var arr = [1, -1, 2, -2, 3];
function isPositive(number) {
  return number > 0;
}
console.log(arr.every(isPositive) ); 
console.log(arr.some(isPositive) );



var a = [ 'a', 'b', 'c' ];
var b = [ 1, 2, 3 ];

console.log( 'a before: ' + a  );
var c = a.splice(0, 2);
console.log( 'a: ' + a  );
console.log( 'c: ' + c  );
console.log( '-------'  );
console.log( 'b before: ' + b  );
var d = b.splice(1, 1, 'foo', 'bar');
console.log( 'b: ' + b  ); //Adds and/or removes!!!
console.log( 'd: ' + d  );*/



function test() {
  // Create a new array from the contents of arguments
  var args = {'1' : 'a', '2':'b', '3':'c'};
  
  a = args.slice(1);
  console.log(arguments);
  //Array.prototype.slice.call(arguments); // returns an array
  //console.log(args.length);
  //console.log(args.concat(['a', 'b', 'c'])); // works
}
test(1, 2, 3);




























