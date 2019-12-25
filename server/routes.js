var express = require("express");
var router = express.Router();

var fruits = require("./controllers/fruit");

// define the home page route

console.log("LOADING API");



router.get("/", function(req, res) {
  res.send("API");
});

router.get("/getFruits", fruits.getFruits);

module.exports = router;
