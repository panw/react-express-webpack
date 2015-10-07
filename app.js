var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	var data = "{message: 'Hello World'}";
	res.send(JSON.parse(data));
});

app.post('/new', function(req, res) {

});

app.listen(app.get('port'), function(){
	console.log("App listening on http://localhost:%s", app.get('port'));
});