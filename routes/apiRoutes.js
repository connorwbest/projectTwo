var db = require("../models");
var reports = require("../config/reports/reports");

module.exports = function(app) {
  app.get("/api/cb/customers", function(req, res) {
    db.sequelize.query("SELECT * FROM customerlist", {
        type: db.sequelize.QueryTypes.SELECT
      })
      .then(function(data) {
        res.json(data);
      });
  });

  
  app.get("/api/customers", function(req, res) {
    switch (req.query.id) {
      case "1":
        db.sequelize
          .query("SELECT * FROM `All Added Customers`", {
            type: db.sequelize.QueryTypes.SELECT
          })
          .then(function(data) {
            res.json(data);
          });
      case "2":
        db.Customer.findAll({
          order: [["createdAt", "DESC"]],
          where: { interested: 1 },
          limit: 5
        }).success(function(data) {
          res.json(data);
        });
      case "3":
        db.Customer.findAll({
          order: [["createdAt", "DESC"]],
          where: { interested: 1 },
          limit: 10
        }).success(function(data) {
          res.json(data);
        });
      default:
    }
  });

  app.get("/api/followups", function(req, res) {
    if (req.query.id === '1') {
        db.sequelize.query('select * from `OPEN Followups BY Interested Customers`',{
          type: db.sequelize.QueryTypes.SELECT
        }).then(function(data){
          res.json(data);
        });
    }
  });

  app.post("/api/customer",function(req,res){
    db.Customer.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  ///example URL /api/followup?id=1
  app.post("/api/followup",function(req,res){
    db.FollowUp.create(req.body).then(function(data) {
      res.json(data);
    });
  })

  ///example URL /api/customer?id=1
  app.put("/api/customer", function(req,res){
    db.Customer.update(
      { [req.body.columnName]: req.body.columnValue },
      { where: { id: req.query.id } }
    );
  });

  ///example URL /api/followup?id=1
  app.put("/api/followup", function(req,res){
    db.FollowUp.update(
      { [req.body.columnName]: req.body.columnValue},
      { where: { id: req.query.id } }
    );
  });
  
  app.get("/api/reports",function(req,res){
    if (req.query.id === 1) {
      reports('select * from `Followup Status Chart`','obj1',function(data){
        res.json(data);
      });
    } else if (req.query.id === 2) {
      // reports('select * from `Followup Status Chart`','obj1',function(data){
      //   res.json(data);
      // });
    }
    
  });
};
