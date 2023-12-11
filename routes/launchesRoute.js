const express = require('express');
const router = express.Router();

const launchesController = require('../controllers/launchesController');

// /launches
router
    .route('/')
    .get(launchesController.getAllLaunches)
    .post(launchesController.postAllLaunches)

module.exports = router;