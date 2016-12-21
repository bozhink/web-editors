var express = require('express');

function editorsRouter() {
    var router = express.Router();

    router
        .get('/monaco', function (req, res) {
            res.render('editors/monaco');
        })
        .get('/ace', function (req, res) {
            res.render('editors/ace');
        })
        .get('/codemirror', function (req, res) {
            res.render('editors/codemirror');
         });

    return router;
}

module.exports = editorsRouter;