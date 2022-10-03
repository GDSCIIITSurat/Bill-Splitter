const express = require('express');
const demoRoute = express.Router();


const { getDemo } = require('../controllers/demo');

demoRoute.route("/").get(getDemo);

module.exports = demoRoute;

