var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hellooo World');
});

app.listen(80, "0.0.0.0");

console.log("Server running at http://0.0.0.0:80/");
