
//building a web server, hooking up to localhost:3000
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.hmtl');
})

http.listen(process.env.PORT || 3000, function(){
		console.log('the application is listening on port 3000');
})