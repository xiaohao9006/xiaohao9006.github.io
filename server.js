/**
 * Created by yunhaoshen on 7/24/16.
 */
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

//const hostname = '172.31.41.125';
const hostname = '172.31.26.113';
const publicHttpPort = 80;
const publicHttpsPort = 443;
const sslPath = __dirname + '/certs/';
const options = {
  key: fs.readFileSync(sslPath + 'key.pem'),
  cert: fs.readFileSync(sslPath + 'server.pem')
};

const publicHttpApp = express();

publicHttpApp.use("/",express.static(__dirname + '/'));

//publicHttpApp.use("/test",express.static(__dirname + '/test'));

http.createServer(function(req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80, function() {
  console.log('Personal Portfolio Http Server running at http://' + hostname + ':' + publicHttpPort);
});
https.createServer(options, publicHttpApp).listen(443, function() {
  console.log('Personal Portfolio Https Server running at https://' + hostname + ':' + publicHttpsPort);
});


