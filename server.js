var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();


app.use(express.static( __dirname + '/mixraterAngular/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log("Listening on Port 8000")
})