var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressedWritable = fs.createWriteStream(__dirname + '/greet.txt.gz');

readable.pipe(writable);

var gzip = zlib.createGzip();
readable.pipe(gzip).pipe(compressedWritable);