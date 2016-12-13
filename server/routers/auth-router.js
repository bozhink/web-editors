var express = require('express');

function authRouter() {
    var router = express.Router();

    router
        .get('/register', function (req, res) {
            res.render('auth/register');
        });

    return router;
}

module.exports = authRouter;