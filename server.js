const express = require('express');
const path = require('path');
const app = express();
const port = 3009;
const proxy = require('http-proxy-middleware');
const compression = require('compression');

app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

var proxyTable = {
  '/menu': 'http://ec2-3-17-28-103.us-east-2.compute.amazonaws.com',
  '/api/reserve/load': 'http://ec2-18-191-229-0.us-east-2.compute.amazonaws.com',
  '/api/photos': 'http://ec2-18-206-121-61.compute-1.amazonaws.com',
  '/overview': 'http://ec2-18-191-13-163.us-east-2.compute.amazonaws.com'
}

var options = {
  target: '/',
  router: proxyTable
}

var myProxy = proxy(options);
app.use(myProxy);
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});