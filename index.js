var config = require('./local_modules/config.js');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var database = require('./local_modules/database.js');

var basicRoutes = require('./routes/basic');

var app = express();

//middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//logger
app.use(function (req, res, next) {
	console.log(req.method + ' ' + req.url);
	next();
});

//Roteamento
app.use('/', basicRoutes);




app.listen(config.port); 
module.exports = router;