const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('../app/routes/user.routes');

module.exports = () => {
    var app = express();

    app.set('port', config.port);
    app.use(bodyParser.json());
    app.use('/user', userRoutes);

    return app;
};
