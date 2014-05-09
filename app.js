var express = require('express'),
	jade = require('jade')
,	app = express();

app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(1234));

app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.render("page");
});

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});