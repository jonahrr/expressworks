var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/search', function(req, res) {
  res.send(req.query);
})
app.listen(process.argv[2]);
