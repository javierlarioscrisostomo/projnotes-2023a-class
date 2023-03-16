#!/ */
// Importing the server logic
// require is used to import code from an external file 
//var app = require('../app');
import app from '../app';
// Importing an external dependecy
//var debug = require('debug')('projnotes');
import Debug from 'debug';
const debug = Debug('projnotes')
// Module that allows to communicate with a client
// usign HTTP protocol
//var http = require('http');
import http from 'http';

/**
 * Get port from environment and store in Express.
 */

//var port = normalizePort(process.env.PORT || '3000');
const port = normalizePort(process.env.PORT || '3000');
// Store the port info in the app
app.set('port', port);

/**
 * Create HTTP server.
 */

//var server = http.createServer(app); // (req, res) => { acciones }
const server = http.createServer(app); // (req, res) => { acciones }

/**
 * Listen on provided port, on all network interfaces.
@@ -40,7 +41,7 @@ server.on('listening', onListening);
 */

function normalizePort(val) {
 // var port = parseInt(val, 10);
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
//@@ -64,18 +65,18 @@ function onError(error) {
    throw error;
  }

  //var bind = typeof port === 'string'
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
     // console.error(bind + ' requires elevated privileges');
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      //console.error(bind + ' is already in use');
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
//@@ -88,9 +89,9 @@ function onError(error) {
 

function onListening() {
  //var addr = server.address();
  //var bind = typeof addr === 'string'
    //? 'pipe ' + addr
   // : 'port ' + addr.port;
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`⭐❤ Listening on ${process.env.APP_URL}:${addr.port} ❤⭐`);
}}}


