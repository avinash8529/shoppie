const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const shoppingRoutes = require('./product');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
shoppingRoutes(router);

module.exports = router;
