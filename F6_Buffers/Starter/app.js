var buf = new Buffer('Hello','utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());

// Synchronouly reading a file
var fs = require('fs');
var greet = fs.readFileSync(__dirname+'/greet.txt', 'utf8');
console.log(greet);

//Asynchrously reading the file
var greet2 = fs.readFile(__dirname+'/greet.txt','utf8', function(err, data){
    console.log(data);
});

console.log('done!');

//Above reads from buffer.
//Below reads from stream

var readableStream = fs.createReadStream(__dirname+'/greet1.txt', {encoding:'utf8',highWaterMark: 32*1024});
var writableStream = fs.createWriteStream(__dirname+'/greet1Copy.txt');

readableStream.on('data', function(chunk){
    console.log(chunk);
    writableStream.write(chunk);
}
);