var express = require("express");
var router = express.Router();

var followUp = require("../models/followUp.js");

//Creating follow-up route
router.get("/followup", function(res, req) {
    followUp.all(function(data) {
        var folUpObj = {
            followUp: data
        };
        console.log(folUpObj);
        res.render("followup", folUpObj);
    });
});