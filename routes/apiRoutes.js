var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/members", function(req, res) {
    db.Member.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/members", function(req, res) {
    db.Member.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/members/:id", function(req, res) {
    db.Member.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
