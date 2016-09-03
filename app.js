var http = require('http');
var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});


app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/test', function(req, res) {
    res.render('test');
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(req,res){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Server running on http://127.0.0.1:5000/');
});
