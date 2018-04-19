// Dependencies
// =============================================================
// Requiring our model
var db = require("../models");
// Requiring express
var express = require("express");
var app = express.Router();

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the deals
    app.get("/", function (req, res) {
        db.Deal.findAll({
            include: [db.Restaurant]
        })
            .then(function (result) {
                var dealObj = {
                    deals: result
                }
                res.render("restaurant", dealObj);
            });
    });

    // GET route for getting CERTAIN deals
    // ****NEED TO EDIT THIS TO CORRESPOND TO FORM******
    app.get("/deals/search", function (req, res) {
        db.Deal.findAll({
            include: [db.Restaurant],
            where: {
                deal_type: req.body.deal_type
            },
        })
            .then(function (result) {
                var dealObj = {
                    deals: result
                }
                res.render("restaurant", dealObj);
            });
    });

    // POST route for saving a new restaurant
    app.post("/api/deals", function (req, res) {
        db.Deal.create({
            deal_description: req.body.deal_description,
            day: req.body.day,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            restrictions: req.body.restrictions,
            deal_type: req.body.deal_type
            
        })
            .then(function (result) {
                res.json(result);
            });
    });

    // DELETE route for deleting restaurants
    //   app.delete("/api/restaurants/:id", function(req, res) {
    //     db.Restaurant.destroy({
    //       where: {
    //         id: req.params.id
    //       }
    //     })
    //       .then(function(result) {
    //         res.json(result);
    //       });
    //   });

    // PUT route for updating burgers
    app.put("/api/deals/:id", function (req, res) {
        db.Deal.update(req.body,
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