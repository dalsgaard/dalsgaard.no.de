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

app.set('view options', {
  layout: false
});


app.get("/", function(req, res) {
  res.render("index");
});

app.get("/offline/index", function(req, res) {
  res.render("offline/index", {layout: false});
});

app.get("/offline/offline", function(req, res) {
  var layout = req.xhr ? false : "offline/layout";
  res.render("offline/offline", {layout: layout});
});

app.get("/offline/:page", function(req, res) {
  var layout = req.xhr ? false : "offline/layout";
  res.render("history/" + req.params.page, {layout: layout});
});

app.get("/history/index", function(req, res) {
  res.header("Cache-control", "no-cache");
  var layout = req.xhr ? false : "history/book";
  res.render("history/contents", {layout: layout});
});

app.get("/history/:page", function(req, res) {
  res.header("Cache-control", "no-cache");
  var layout = req.xhr ? false : "history/book";
  res.render("history/" + req.params.page, {layout: layout});
});

app.get("/xhr2/jp-sup", function(req, res) {
  res.header('Access-Control-Allow-Origin', "*");
  res.render("xhr2/jp-sup");
});

app.get("/:section/same", function(req, res) {
  res.render(req.params.section + "/index");
});

app.get("/:section/:page", function(req, res) {
  res.render(req.params.section + "/" + req.params.page);
});

app.get("/notification/notification", function(req, res) {
  res.render("notification/notification", {layout: false});
});

var port = 8340;
app.configure('production', function() {
  port = 80;
});

app.listen(port, "0.0.0.0");

console.log("Server running at http://0.0.0.0:" + port);
