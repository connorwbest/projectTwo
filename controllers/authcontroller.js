var exports = (module.exports = {});
var path = require('path')

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("index");
};

exports.customers = function(req, res) {
  res.render("customers");
};

exports.dashboard = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/followup.html"));
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });


};
