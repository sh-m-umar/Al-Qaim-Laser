const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

module.exports = () => {
    const app = express();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-corralation-id, Content-Type, Accept, Authorization");
        next();
      });

    app.set('port', config.PORT);
    app.use(bodyParser.json());

    // load all routing files
    require('../helpers/routes-loader')({app});

    return app;
};
