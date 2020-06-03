const express = require('express');
const reviewController = require('../controllers/reviewsController');
const authController = require('../controllers/authController');

// By merging params, im getting access to other param's id
const reviewsRouter = express.Router({ mergeParams: true });
reviewsRouter.use(authController.protect);

reviewsRouter
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

reviewsRouter
  .route('/:id')
  .get(reviewController.getSingleReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateSingleReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteSingleReview
  );
module.exports = reviewsRouter;
