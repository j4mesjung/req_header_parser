//IP Address, language, and operating system

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.enable('trust proxy');

app.get('/', function(req,res){
  res.send('hit api/whoami endpoint');
})

app.get('/api/whoami', function(req,res){
  
    res.json({
      ip: req.ip,
      language: req.headers['accept-language'].split(',')[0],
      OS: req.headers['user-agent'].split('(')[1].split(')')[0]
    })
    
})

console.log("App listening on port: " + process.env.PORT);
app.listen(process.env.PORT);