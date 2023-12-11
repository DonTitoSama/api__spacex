const express = require('express');
const router = express.Router();

// liaison au controller
const launchesController = require('../controllers/launchesController');

// routes pour les launches
router
    .route('/')
    .get(launchesController.getAllLaunches)
    .post(launchesController.postAllLaunches)

module.exports = router;