var express = require('express');
var router = express.Router();
var friends = require("../data/friends.js");
var app = express();

var names = friends.name;
var photos = friends.photo;
var scoreArr = friends.scores;

app.get('/api/friends', function(req, res, next) {
  res.send("respond with friends api");
});

app.post('/api/friends',function(req,res,next){
  res.send("post to friends api data")
});

app.post("/api/friends", function(req,res){
  var newFriend = req.body;
  console.log(newFriend);
  friends.push(newFriend);
  res.json(newFriend);
})

module.exports = router;
