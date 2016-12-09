var express = require('express');
var http = require('http');
var app = express();

app.use(function (req, res, next) {
	//console.log(req.headers);
	var data = req.headers;
  var a = 0;
  //success:   next();
  //Error:  return next( Error( 'You are not authorized to access this page' ) );
  var url  = req.protocol + '://' + req.get('host') + req.originalUrl;
  //console.log(url);
  //console.log(req.data);
  var page = req.originalUrl;
  console.log('fds '+page);
  if(page == '/' | page == 'undefined'){
  	return res.render('index', { title: 'hello'});
   }else{
   	return res.render('error', { message: 'No page found', error: '404'});
   }
});

module.exports = app;