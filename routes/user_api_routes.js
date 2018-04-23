// Dependencies
// =============================================================
// Requiring our model
var db = require("../models");
// Requiring express
var express = require("express");
var app = express.Router();
var sendEmail = require("../verification/email.js")



// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the users
  app.get("/api/all", function (req, res) {
    db.User.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // POST route for saving a user
  app.post("/api/new_user", function (req, res) {
    console.log("User Data:");
    console.log(req.body);
    db.User.create({
      user_name: req.body.user_name,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }).then(function (result){
        sendEmail(result.dataValues.id, result.dataValues.email);
    });
  });

  // Get a specific user
  app.get("/api/user", function (req, res) {
    db.User.findAll({
      where: {
        email: req.query.email,
        password: req.query.password
      }
    }).then(function (result) {
      var userObj = {
        users: result
      }
      res.json(result);
    });
  });

  // PUT route for updating user
  app.put("/api/user/:id", function (req, res) {
    db.User.update({"verified":true},
      {
        where: {
          id: req.params.id
        }
      })
      .then(function (result) {
        res.json(result);
      });
  });
};