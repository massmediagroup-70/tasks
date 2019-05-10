var express = require('express');
var app = express();

app.use(express.static(__dirname + "/proj/public/"));
app.get('/', function (req, res) {
	res.sendFile(__dirname + "/proj/" + "index.html");
})

var server = app.listen(1337, function (){
	var host = server.address().address
	var port = server.address().port

   console.log('Listening at http://127.0.0.1:1337/');
})

