/*var EventEmitter = require("events").EventEmitter;
 
var ee = new EventEmitter();

function onlyOnce () {
    console.log(ee.listeners("onlyOnce"));
}


ee.on("newListener", function (evtName, fn) {
    console.log("New Listener: " + evtName);
});


ee.on("call", function (data) {
    console.log("event has occured: ");
	ee.removeListener("call", function(){console.log("function");});
	
	ee.on("removeListener", function (evtName) {
		console.log("Removed Listener: " + evtName);
	});
});
 
//ee.emit("call", "I'm here!");

//ee.emit("call", "I'm here!");'*/

var EventEmitter = require("events").EventEmitter;
 
var ee = new EventEmitter();

ee.on("newListener", function (evtName, fn) {
    console.log("New Listener: " + evtName);
});
 
ee.on("removeListener", function (evtName) {
    console.log("Removed Listener: " + evtName);
});
 
function foo () {console.log("Foo");}
 
ee.on("save-user", foo);
ee.emit("save-user");
ee.removeListener("save-user", foo);
ee.emit("save-user");


