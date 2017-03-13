var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./server/routes/routes.js');
var path = require('path');



// Serve back static files
app.use(express.static(path.join('./public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.resolve('.public/index.html'));
});

app.use('/', router); // if I had put '/employees' in here, I would be able to access employees using '/' in routes.js

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
