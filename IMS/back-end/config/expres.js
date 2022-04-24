const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

module.exports = () => {
    const app = express();

    app.set('port', config.PORT);
    app.use(bodyParser.json());

    // load all routing files
    require('../helpers/routes-loader')({app});

    return app;
};
