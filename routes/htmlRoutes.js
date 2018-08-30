var db = require("../models");
var path = require('path');

module.exports = function(app) {
  app.get("/customers", function(req, res) {
       res.sendFile(path.join(__dirname + "/../public/customers.html"))
   });
 
  app.get("/followup", function(req, res) {
    db.Follow_ups.findAll({}).then(function(cards) {
      res.render("followups", {
        Cards: cards
      });
    });
  });

  app.get("/reports", function(req, res) {
    res.render("reports");
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
