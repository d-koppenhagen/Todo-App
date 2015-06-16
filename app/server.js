var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var config = require("./config.js");
var todo = require('./routes/todo.routes.js');

var app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));


// todo routes
app.get('/todo', todo.findAll);
app.get('/todo/:id', todo.findById);
app.post('/todo', todo.add);
app.put('/todo/:id', todo.update);
app.delete('/todo/:id', todo.delete);
app.delete('/todo', todo.deleteAll);

//serve static frontend
app.use(express.static(__dirname + '/frontend'));

app.listen(config.port);
console.log("the app will run on:", config.port);
