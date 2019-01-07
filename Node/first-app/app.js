

function sayHello(name) {
    console.log("Hello " + name);
}

//sayHello("Jagadeesh");

// Global objects such as console.log( ) are accessible across the app.. 
// var is only confined to the current file

var message ="Hello";
console.log(global.message);

//logger("Logger");

// ---------------------------------------

var path = require("path");

var pathObj =path.parse(__filename);

console.log(pathObj);


// ---------------------------------------

const os = require("os");

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total memory is ${totalMem} bytes`);
console.log(`Total free memory is ${freeMem} bytes`);


// ---------------------------------------

const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./" , filesAsync);

function filesAsync(err, result) {
    if(err)
        console.log("Error",err);
    else
        console.log(files);
}

// --- Misc
var addnum = new Function("x","y", "return x+y");
console.log(addnum(3,4));

// ------------Events---------------------------
// EventEmitter is a class
const EventEmitter = require("events");
const emitter = new EventEmitter();

// register listener can use emitter.addListener but we are using alias

emitter.on('MessageLogged', (args) => {
    console.log("MessageLogged", args);
});

// Raise an event
emitter.emit('MessageLogged', {id: 1, type:'eventArgs'});

// ------------Logger Events---------------------------


const Logger = require('./logger');
const logger = new Logger();
logger.on('LoggerMessageLogged', (args) => {
    console.log("Listener Called", args);
} );

logger.log("Message");



