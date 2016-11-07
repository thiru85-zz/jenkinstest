var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<h1>Rusty Steele</h1>
<p>Hi, I'm a dog. Woof!</p>

<img src="http://i.imgur.com/Zl0A6erm.jpg">

<h2>Some of my favourite places:</h2>

<ul>
	<li>The beach</li>
	<li>The dog park</li>
	<li>The fire hydrant</li>
</ul>

<p>Make sure to follow me on <a href="http://www.instagram.com">Instagram</a></p>

</body>
</html>
');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
