var nghost = require('nghost');

//Set Options

var options = {
    publicFolder: __dirname + '/build',
    port: 8087,
    favicon: __dirname + '/build/favicon.ico'
}


var app = nghost(options);