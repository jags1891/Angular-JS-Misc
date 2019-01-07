const EventEmitter = require("events") ;

console.log(__filename);
console.log(__dirname);

var url="www.url.com";


class Logger extends EventEmitter {

     log(message) {
        console.log(message);

        this.emit('LoggerMessageLogged', {id: 1, type:'LoggereventArgs'});
    }
}

module.exports = Logger;