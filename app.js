var socket = require('socket.io'),
	express = require('express'),
	ejs = require('ejs')
,	app = express();

var server = app.listen(1234, function() {
	console.log("Listening on port %d", server.address().port)
});

app.get('/', function(req, res) {
	res.send("Welcome");
});