var bodyParser = require('body-parser');
var path = require('path');
var fs = require("fs");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

// serve the static assets
app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
	maxAge: "200d" // We can cache them as they include hashes
}));
app.use("/", express.static(path.join(__dirname, "..", "public"), {
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var html = fs.readFileSync(path.resolve(__dirname, "../src/index.html"), "utf-8");
app.get('/', function(req, res) {
	res.contentType = "text/html; charset=utf8";
	res.end(html);
});

app.listen(app.get('port'), function(){
	console.log("App listening on http://localhost:%s", app.get('port'));
});