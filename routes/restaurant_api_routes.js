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

    // GET route for getting all of the restaurants
    app.get("/", function (req, res) {
        db.Restaurant.findAll({
            include: [db.Deal]
        })
            .then(function (result) {
                var restObj = {
                    restaurants: result
                }
                res.render("restaurant", restObj);
            });
    });

    // // GET route for getting CERTAIN restaurants
    // // ****NEED TO EDIT THIS TO CORRESPOND TO FORM******
    // app.get("/restaurants/search", function (req, res) {
    //     db.Restaurant.findAll({
    //         include: [db.Deal],
    //         where: {
    //             id: req.params.id
    //         },
    //     })
    //         .then(function (result) {
    //             var restObj = {
    //                 restaurants: result
    //             }
    //             res.render("restaurant", restObj);
    //         });
    // });

    // POST route for saving a new restaurant
    app.post("/api/restaurants", function (req, res) {
        db.Restaurant.create({
            restaurant_name: req.body.restaurant_name,
            description: req.body.description,
            phone_number: req.body.phone_number,
            website: req.body.website,
            address: req.body.address
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
    app.put("/api/restaurants/:id", function (req, res) {
        db.Restaurant.update(req.body,
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