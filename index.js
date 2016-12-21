const PORT = process.env.PORT || 3000;

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    routersConfig = require('./server/settings/routers-config'),
    server;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(logger('combined'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client', {
    maxAge: 4 * 60 * 60 * 100 /* 2hrs */
}));
app.use('/m', express.static(__dirname + '/modules'));
app.use('/nm', express.static(__dirname + '/node_modules'));
app.use('/lib', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/client/build/dist/css'));
app.use('/js', express.static(__dirname + '/client/build/dist/js'));

routersConfig(app);

server = app.listen(PORT, function () {
    var port = server.address().port;
    console.log('Server is listening on http://localhost:%s', port);
})
