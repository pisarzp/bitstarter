var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());
var buffer = new Buffer(16);



app.get('/', function(request, response) {
  var txt = fs.readFileSync('./index.html','utf8');
  response.send(txt.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
