var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var register = require("./routes/register.js");
var login = require("./routes/login.js");
var cart = require("./routes/cart.js");
// var cart = require("./routes/cart.js");

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myapp"); 

var session = require("express-session");


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/apiregister', register);
app.use('/apilogin', login);
app.use('/apicart', cart);
// app.use('/apicart', cart);

//cookie


app.use(session({
	name:"userID",
	secret:"dw",
	cookie:{maxAge:1000*3600},
	resave:true,
	saveUninitialized:true
}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
