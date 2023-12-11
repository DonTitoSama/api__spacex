const express = require('express');
const router = express.Router();

const launchesController = require('../controllers/launchesController');

// /launches
router
    .route('/launches/')
    .get(launchesController.listAllLaunches)
    .post(launchesController.createALaunche);

module.exports = router;