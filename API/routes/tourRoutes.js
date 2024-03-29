const express = require('express');
const router = express.Router()
const tourController = require('../controllers/tourController');

router.param('id', (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    next()
})
router.route('/top-5-cheap').get(tourController.aliasTopTours,tourController.getAllTours)

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour)

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router