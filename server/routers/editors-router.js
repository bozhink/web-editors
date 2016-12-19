var express = require('express');

function editorsRouter() {
    var router = express.Router();

    router
        .get('/monaco', function (req, res) {
            res.render('editors/monaco');
        });

    return router;
}

module.exports = editorsRouter;