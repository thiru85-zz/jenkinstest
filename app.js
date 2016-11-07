var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
res.send('THIS IS A TEST LINE OF TEXT FOR NODE.JS - Karthik demo');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
