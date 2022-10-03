const express = require('express');

const router = express.Router();

router.use("/demo",require('./demo'));

module.exports = router;