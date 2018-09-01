var authController = require("../controllers/authcontroller.js");


module.exports = function(app, passport) {
  app.get("/signup", authController.signup);
  app.get("/", authController.signin);
  app.get("/followup", isLoggedIn, authController.dashboard);
  app.get("/customers", isLoggedIn, authController.customers);
  app.get("/logout", authController.logout);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/followup",

      failureRedirect: "/signup"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/followup",

      failureRedirect: "/"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/");
  }
};
