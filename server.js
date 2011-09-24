var express = require('express');

var app = express.createServer();

app.configure(function(){
  app.use(express.static(__dirname + '/static'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.send('Hellooo World');
});

app.get('/history/:page', function(req, res){
  var layout = req.xhr ? false : "history/layout";
  res.render("history/" + req.params.page, {layout: layout});
});


var port = 8340;

app.listen(port, "0.0.0.0");

console.log("Server running at http://0.0.0.0:" + port);
