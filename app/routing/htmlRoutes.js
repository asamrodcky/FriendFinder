var express = require('express');
var router = express.Router();
var path = require('path');
var friends = require("../data/friends.js");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get('/survey', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// router.get('/api/friends', function(req, res, next) {
//   return res.json(friends);
// });

/* GET home page. W catch-all route */
router.get('/*', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;
