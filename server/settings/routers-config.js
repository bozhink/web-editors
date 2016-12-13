var homeRouter = require('../routers/home-router');

module.exports = function (app) {
    app.use('/', homeRouter());
}