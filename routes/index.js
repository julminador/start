const express = require('express');
const credenciales = require('../components/credenciales/router');

const routes = function (app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/credenciales', credenciales);
}

module.exports = routes;