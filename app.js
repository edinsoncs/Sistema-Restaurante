'use strict';
//Initialize Project Restaurant CMS 2018

require('dotenv').config();

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var monk = require('monk');
var mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/rest';
var db = monk(mongodbUri);
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var supabase = require('./config/supabase');
var firebase = require('./config/firebase');

var printer = require('node-thermal-printer');




var routes = require('./routes/index');
var verify = require('./routes/validate');
var users = require('./routes/users');
var panel = require('./routes/panel');
var admin = require('./routes/admin');
var pedidos = require('./routes/pedidos'); 
var mesas = require('./routes/mesas');
var ventas = require('./routes/ventas');
var apipollos = require('./routes/apipollos');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rest')
  .then(function() {
    console.log('Genial me conecte a la bd');
  })
  .catch(function(err) {
    throw err;
  });



/*Function auntetificacion*/



/*End auntetificacion*/

require('./models/local');
require('./passport')(passport);

var app = express();



app.use(function(req,res,next){
  req.db = db;
  req.supabase = supabase;
  req.firebase = firebase;
  next();
});



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});


/*Express Sessions*/
//app.use(expressSession({secret: 'miclavesecreta', proxy: true, resave: true, saveUninitialized: true}));
app.use(expressSession({ 
  secret: 'ilovescotchscotchyscotchscotch',  
  resave: false, 
  saveUninitialized: true, 
  cookie:{
     maxAge : 360000000000 // one hour in millis
   }
 }));


app.use(passport.initialize());
app.use(passport.session());


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/');
    console.log(req.isAuthenticated());
  }
}





// view engine setup — pug handles .jade templates (pug is the successor to jade)
app.engine('jade', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/incorrecto', verify);
app.use('/users', ensureAuthenticated, users);
app.use('/panel', ensureAuthenticated, panel);
app.use('/administracion', ensureAuthenticated, admin);
app.use('/pedidos', ensureAuthenticated, pedidos);
app.use('/mesas', ensureAuthenticated, mesas);
app.use('/ventas', ensureAuthenticated, ventas);
app.use('/apipollos', apipollos);


app.post('/login', passport.authenticate('local', {
  successRedirect: '/panel',
  failureRedirect: '/incorrecto'
}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
