var homeRouter = require('../routers/home-router'),
    authRouter = require('../routers/auth-router');

module.exports = function (app) {
    app.use('/', homeRouter());
    app.use('/auth/', authRouter());
}