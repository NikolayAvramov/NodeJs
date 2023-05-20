const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController.js');

// router.param('id', tourController.checkId);

router.route('/').get(tourController.getAllTours).post(
  // tourController.checkBody,
  tourController.postTour
);
router
  .route('/:id')
  .get(tourController.getOneTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
