var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //npm install body-parser

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id , Qstr: req.query.qstr});
});

app.post('/person', urlencodedParser,function(req, res) {
	res.send('Thanks, ' + req.body.firstname);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);