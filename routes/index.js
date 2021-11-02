const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = ({ feedbackService, speakerService }) => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakersRoute(speakerService));
  router.use('/feedback', feedbackRoute(feedbackService));
  return router;
};
