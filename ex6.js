var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.put('/message/:id', function(req, res) {
  res.end(require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex'));
});
app.listen(process.argv[2]);
