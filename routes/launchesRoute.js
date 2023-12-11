const express = require('express');
const router = express.Router();

const launchesController = require('../controllers/launchesController');

// /launches
router
    .route('/posts/:id_post/comments')
    .get(launchesController.listAllLaunches)
    .post(launchesController.createALaunche);


module.exports = router;