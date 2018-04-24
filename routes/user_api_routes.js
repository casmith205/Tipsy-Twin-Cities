// Dependencies
// =============================================================
// Requiring our model
var db = require("../models");
var sendEmail = require("../verification/email.js")

// Routes
// =============================================================
module.exports = function (app) {

  // POST route for saving a new user to the db
  app.post("/api/new_user", function (req, res) {
    console.log("User Data:");
    console.log(req.body);
    db.User.create({
      user_name: req.body.user_name,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    })
      .then(function (result) {
        sendEmail(result.dataValues.id, result.dataValues.email);
      })
      .catch(function (err) {
        res.json(err);
      })
  });

  // GET the user with this email and password
  app.get("/api/user", function (req, res) {
    db.User.findAll({
      where: {
        email: req.query.email,
        password: req.query.password
      }
    })
      .then(function (result) {
        var userObj = {
          users: result
        }
        res.json(result);
      })
      .catch(function (err) {
        res.json(err);
      })
  });

  // PUT route for updating user's VALIDATED field
  app.put("/api/user_update", function (req, res) {
    db.User.update({ "verified": true },
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (err) {
        res.json(err);
      })
  });
};