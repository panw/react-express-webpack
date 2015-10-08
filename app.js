var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();

var postDB = [];

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/posts', function(req, res) {
	res.setHeader('Cache-Control', 'no-cache');
	res.send(postDB);
});

app.post('/posts/new', function(req, res) {
	postDB.push(req.body);
	res.send({status: 'success'});
});

app.listen(app.get('port'), function(){
	console.log("App listening on http://localhost:%s", app.get('port'));
});