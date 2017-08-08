 /******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

'use strict';

var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

app.get('/api/imagesearch/:search', function(req, res){
  var url = 'https://www.googleapis.com/customsearch/v1?key=' + process.env.KEY + '&cx=' + process.env.CX + '&searchType=image&start=' + (req.query.offset || '1') + '&q='+req.params.search;
  console.log(url)
  request({
    url: url,
    json: true
  }, function(err, responce, body){

    //console.log((body.items))
  }).pipe(res)

})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

