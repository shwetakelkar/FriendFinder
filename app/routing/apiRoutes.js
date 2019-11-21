var express = require("express");

var friend = require("../data/friend.js")



var router = express.Router();
router.get("/api/friends",friend.list);


router.post("/api/friends",friend.friendCreate) 

module.exports= router