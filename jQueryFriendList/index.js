
var express = require('express');
var app     =  express();
var http    = require('http').Server(app);


//express function tells node to find static files
app.use(express.static(__dirname +'/public'));
//serve the index.html file
app.get('/', function(req, res){
		res.sendFile(__dirname + '/index.html');

});

//node functions
//tells the server to select the easiest local port, whether the one available or port 3000
http.listen(process.env.PORT || 3000, function (){

				console.log('listening on *:3000');

});
