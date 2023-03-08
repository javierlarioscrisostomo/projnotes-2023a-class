// Helps to handle http errors
//var createError = require('http-errors');
import createError from 'http-errors'
// Import the Express Library
//var express = require('express');
import express from 'express';
// Is a Core-Node library to manage system paths
//var path = require('path');
import path from 'path'
// Helps to parse client cookies
//var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// Library to log http communication
//var logger = require('morgan');
import logger from 'morgan'

// Importing subroutes
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var apiRouter = require('./routes/api');
import indexRouter from './routes/index' 
import usersRouter from './routes/users';
import apiRouter from './routes/api';

// We are creating the express instance
//var app = express();
const app = express();

// view engine setup
// We are delcaring the localization of the views
//@@ -41,12 +41,12 @@ app.use('/users', usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
//app.use(function(err, req, res, next) {
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
//@@ -56,4 +56,4 @@ app.use(function(err, req, res, next) {
  res.render('error');
res.render('error');
});

//module.exports = app;
export default app;