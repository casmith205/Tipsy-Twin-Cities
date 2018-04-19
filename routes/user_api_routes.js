// Dependencies
// =============================================================
// Requiring our burger model
var db = require("../models");
// Requiring express
var express = require("express");
var app = express.Router();
// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the users

  app.get("/api/all", function(req, res) {
    User.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // POST route for saving a user
  app.post("/api/new_user", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    User.create({
      user_name: req.body.user_name,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    });
  });
  // Get a specific user
  app.get("/api/:user", function(req, res) {
    Book.findAll({
      where: {
        user_name: req.User.user_name
      }
    }).then(function(results) {
      res.json(results);
    });
  });
  
  // PUT route for updating user
  app.put("/api/user/:id", function (req, res) {
    db.Bur.update(req.body,
      {
        where: {
          id: req.User.id
        }
      })
      .then(function (result) {
        res.json(result);
      });
  });
};