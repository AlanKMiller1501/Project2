var db = require("../models");

module.exports = function(app) {
  app.post("/api/add", function(req, res) {
    db.beers.create(req.body).then(function(data) {
      console.log(data);
      res.redirect("/");
    });
  });

  app.post("/api/rate", function(req, res) {
    console.log(req.body);
    db.ratings.create(req.body).then(function(data) {
      console.log(data);
      res.redirect("/");
    });
  });
};
