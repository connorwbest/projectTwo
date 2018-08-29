var db = require("../models");

module.exports = function(app) {
  // Create a new example
  app.post("/api/:model/", function(req, res) {
    switch (req.params.model) {
      case "customer":
        db.Customer.create(req.body);
      case "followup":
        db.FollowUp.create(req.body);
      case "user":
        db.User.create(req.body);
      default:
    }
  });

  app.put("/api/:model/:id", function(req, res) {
    switch (req.params.model) {
      case "customer":
        db.Customer.update({ where: { id: req.params.id } });
      case "followup":
        db.FollowUp.update({ where: { id: req.params.id } });
      case "user":
        db.User.update({ where: { id: req.params.id } });
      default:
    }
  });
};
