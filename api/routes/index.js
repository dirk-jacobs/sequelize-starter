'use strict';

const express = require('express');

const routes = express.Router();

// require routes files
const resourceRoutes = require('./resource');
const userRoutes = require('./user');
const nationalityRoutes = require('./nationality');

// use them with this router
routes.use('/resource', resourceRoutes);
routes.use('/', userRoutes);
routes.use('/', nationalityRoutes);


// export the routes
module.exports = routes;
