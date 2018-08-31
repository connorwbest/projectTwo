var db = require("../models");

module.exports = function(app) {
  //// Example URL /api/ctl/cb/status
  app.get("/api/ctl/cb/status",function(req,res){
    //Raw Queries for selecting followup status. SQL views was used not Sequelize in-built queries
    db.sequelize.query("SELECT * FROM statuslist", { type: sequelize.QueryTypes.SELECT})
      .success(function(data){
        res.json(data);
      });
  });
  
  ///to be decided whet
//   app.get("/api/ctl/cb/actions",function(req,res){
//     //Raw Queries for selecting followup status. SQL views was used not Sequelize in-built queries
//     db.sequelize.query("SELECT * FROM actionlist", { type: sequelize.QueryTypes.SELECT})
//     .success(function(data){
//       res.json(data);
//     });
//   });
  app.get("/api/ctl/cb/customers",function(req,res){
    //Raw Queries for selecting followup status. SQL views was used not Sequelize in-built queries
    db.sequelize.query("SELECT * FROM customerlist", { type: sequelize.QueryTypes.SELECT})
    .success(function(data){
      res.json(data);
    });
  });
  
  //// Example URL /api/ctl/tb/customers?id=1
  //// Example URL /api/ctl/tb/customers?id=2
  //// Example URL /api/ctl/tb/customers?id=3
  app.get("/api/ctl/tb/customers",function(req,res){
    switch(parseInt(req.query.id)){
      //all customers called with in-built sequelize query
      case 1:
        db.Customer.findAll({where:{interested:1}}).success(function(data){
          res.json(data);
        });
      //latest 25 customers called with in-built sequelize query
      case 2:
        db.Customer.findAll({
          order:[['createdAt','DESC']],
          where:{interested:1},
          limit:25
        }).success(function(data){
          res.json(data);
        });
      //latest 50 customers called with in-built sequelize query
      case 3:
        db.Customer.findAll({
          order:[['createdAt','DESC']],
          where:{interested:1},
          limit:25
        }).success(function(data){
          res.json(data);
        });
    }
  });
  
  ///example URL /api/ctl/cards/followup
  app.get("/api/ctl/cards/followup",function(req,res){
    ///assigned to phung
  });
  
  app.get("/api/customers", function(req, res) {
    switch (req.query.id) {
      case "1":
        db.Customer.findAll({
          "limit": 10,
          "query": "SELECT * FROM `All Added Customers`", {
            type: db.sequelize.QueryTypes.SELECT
          })
          .then(function(data) {
            res.json(data);
          });
      case "2":
      default:
    }
  });
  
  ///example URL /api/customer
  app.post("/api/:model/", function(req, res) {
    switch (req.params.model) {
      case "customer":
        db.Customer.create(req.body).then(function(data){
          res.json(data);
        });
      // case "followup":
      //   db.FollowUp.create(req.body).then(function(data){
      //     res.json(data);
      //   });
      default:
    }
  });

   ///example URL /api/customer?id=1
  app.put("/api/:model", function(req, res) {
    switch (req.params.model) {
      case "customer":
        db.Customer.update(
          { [req.body.columnName]: req.body.columnValue },
          { where: { id: req.query.id } }
        );
      case "followup":
        db.FollowUp.update({ where: { id: req.params.id } });
      default:
    }
  });

  //from Phung: //getting route for getting all of the follow up cards
  app.get("/api/followup", function(req, res) {
    // var query = {};
    // if (req.query.customer_id) {
    //     query.CustomerId = req.query.author_id;
    // }
    //Creating variable that grabs current date
    var d = new Date();
    var curDate = moment(d).format("MMM Do YY");

    db.FollowUp.findAll({
        where: {
            duedate: curDate,
            open: true
        },
        include: [db.Customer]
    }).then(function(dbFolUp) {
        res.json(dbFolUp);
        console.log(dbFolUp);
    });
});

};
