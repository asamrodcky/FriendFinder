var express = require('express');
var router = express.Router();
var friends = require("../data/friends.js");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get('/api/friends', function(req, res, next) {
  console.log(friends)
  res.json(friends);
});

app.post("/api/friends", function(req,res){
  var newFriend = req.body;
  console.log(newFriend);
  friends.push(newFriend);
  res.json(newFriend);
})

module.exports = router;
