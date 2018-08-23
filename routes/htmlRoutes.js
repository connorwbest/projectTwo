var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Login.findAll({}).then(function(credentials) {
      res.render("index", {
        Login: credentials
      });
    });
  });

  app.get("/customers", function(req, res) {
    db.Customer.findAll({}).then(function(customers) {
      res.render("index", {
        Customers: customers
      });
    });
  });

  app.get("/followup", function(req, res) {
    db.FollowUp.findAll({}).then(function(cards) {
      res.render("index", {
        Cards: cards
      });
    });
  });

  /* // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
 */
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
