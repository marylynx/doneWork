/*for(var i = 0; i < 5; i++) {
  (function() {
    setTimeout( function() { console.log(i); }, 500*i);
  })();
}*/

/*for(var i = 0; i < 5; i++) {
 setTimeout(function() {
  console.log(i);
 }, 100);
 i++; // 6 6 6 
} */

for(var i = 0; i < 5; i++) {
var j = i;
 setTimeout(function() {
  console.log(j);
 }, 100); // 4 4 4
 i++;
}