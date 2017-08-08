 /******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

'use strict';

var express = require('express');
var request = require('request')
var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

app.get('/api/imagesearch/:search*', function(req, res){
  console.log('https://www.googleapis.com/customsearch/v1?key=' + process.env.KEY + '&cx=' + process.env.CX + '&searchType=image&q=lol')
  res.send(req.params.search)
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

