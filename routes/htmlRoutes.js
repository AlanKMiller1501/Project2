var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.beers
      .findAll({
        include: [db.ratings]
      })
      .then(function(data) {
        console.log(data);
        res.render("pages/index", {
          title: "Welcome to Beer land!",
          beers: data.map(x => ({
            ...x,
            totalRating: x.ratings.reduce(
              (x, i, l) => (x = (x * (l - 1) * parseInt(i.userRating)) / l),
              0
            )
          }))
        });
      });
  });

  app.get("/add", function(req, res) {
    res.render("pages/add", {
      title: "Add Beers!"
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("pages/404");
  });
};
