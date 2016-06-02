var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(require('stylus').middleware(process.argv[3]));
app.use(bodyparser.urlencoded({
  extended: false
}));
app.listen(process.argv[2]);
