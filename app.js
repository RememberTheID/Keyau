var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

// 定义路由
var indexRouter = require('./routes/index');
var telRouter = require('./routes/tel');
var cellarRouter = require('./routes/cellar');
var newCenterRouter = require('./routes/newCenter');
var aboutUsRouter=require('./routes/aboutUs');
var joinUsRouter=require('./routes/joinUs');
var joinActionRouter=require('./routes/joinAction');
var productCenterRouter = require('./routes/productCenter');
var wineCultureRouter = require('./routes/wineCulture');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',ejs.__express);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/tel', telRouter);
app.use('/cellar', cellarRouter);
app.use('/newCenter', newCenterRouter);
app.use('/aboutUs',aboutUsRouter);
app.use('/joinUs',joinUsRouter);
app.use('/joinAction',joinActionRouter);
app.use('/wineCulture',wineCultureRouter);
app.use('/productCenter',productCenterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
