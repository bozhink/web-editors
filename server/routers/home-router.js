var express = require('express');

function homeRouter() {
    var router = express.Router();

    router
        .get('/', function (req, res) {
            res.render('home/index', {
                title: 'Home page'
            });
        })
        .get('/help', (req, res) => res.render('home/help'))
        .get('/contacts', (req, res) => res.render('home/contacts'))
        .get('/about', (req, res) => res.render('home/about'));

    return router;
}

module.exports = homeRouter;