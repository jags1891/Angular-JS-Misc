

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname+'/public'));

app.use('/', function(req, res, next){
    console.log('Requested URL: '+ req.url);
    next();
});

app.get('/' , function(req, res){
res.send('<html><head><link rel="stylesheet" href="style.css"></head><body><h1>Hello World</h1></body></html>');
});

app.get('/api' , function(req, res){
res.json({firstname:'John', lastname:'Doe'});
});

app.listen(port);