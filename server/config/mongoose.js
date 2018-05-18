var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/mixrater');

mongoose.connection.on('connected', () => {
    console.log("Connected to the Database")
})
var models_path = path.join(__dirname, './../models');
mongoose.Promise = global.Promise;

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})