var homeRouter = require('../routers/home-router'),
    authRouter = require('../routers/auth-router'),
    editorsRouter = require('../routers/editors-router');

module.exports = function (app) {
    app.use('/', homeRouter());
    app.use('/auth/', authRouter());
    app.use('/editors', editorsRouter());
}