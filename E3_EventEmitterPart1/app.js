var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet',function(){
    console.log('Someone said hello');
});

emitter.on('greet',function(){
    console.log('greeted');
});

console.log('Hello');
emitter.emit('greet');