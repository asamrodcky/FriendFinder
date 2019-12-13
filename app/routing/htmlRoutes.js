var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/survey', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

/* GET home page. W catch-all route */
router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;
