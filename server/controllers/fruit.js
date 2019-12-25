var models = require("../models");

var fruits = {
  getFruits: (req, res) => {


    console.log("HIT ON getFruits")


    models.fruit
      .findAll({})
      .then(aa => {
        res.json({
          data: aa
        });
      })
      .catch(e => {
        res.status(400).json({
          error: e
        });
      });
  }
};

module.exports = fruits;
