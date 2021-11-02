const express = require('express');

const router = express.Router();

module.exports = (feedbackService) => {
  router.get('/', async (req, res) => {
    const feedback = await feedbackService.getList();
    res.json(feedback);
  });

  router.post('/', (req, res) => {
    res.send('Feedback form posted');
  });

  return router;
};
