var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  app.post("/api/:model/", function(req, res) {
    switch (req.params.model) {
      case "customer":
        dbCreate(db.Customer, req, () => {});
      case "followup":
        dbCreate(db.Followup, req, () => {});
      case "user":
        dbCreate(db.User, req, () => {});
      default:
    }
  });

  // Delete an example by id
  app.delete("/api/:model/:id", function(req, res) {
    switch (req.params.model) {
      case "customer":
        dbDelete(db.Customer, req, () => {});
      case "followup":
        dbDelete(db.Followup, req, () => {});
      case "user":
        dbDelete(db.User, req, () => {});
      default:
    }
  });

  app.put("/api/:model/:id", function(req, res) {
    switch (req.params.model) {
      case "customer":
        dbUpdate(db.Customer, req, () => {});
      case "followup":
        dbUpdate(db.Followup, req, () => {});
      case "user":
        dbUpdate(db.User, req, () => {});
      default:
    }
  });
};

function dbCreate(dbModel, req, cb) {
  dbModel.create(req.body).then(function(data) {
    cb(data);
  });
}

function dbDelete(dbModel, req, cb) {
  dbModel.destroy({ where: { id: req.params.id } }).then(function(data) {
    cb(data);
  });
}

function dbUpdate(dbModel, req, cb) {
  dbModel.update({ where: { id: req.params.id } }).then(function(data) {
    cb(data);
  });
}
