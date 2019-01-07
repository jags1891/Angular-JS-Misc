var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/userlist/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end(  data );
   });
})
app.get('/', function (req, res) {
    res.send('Hello World');
 })
 
var server = app.listen(1337,'127.0.0.1', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port)

})