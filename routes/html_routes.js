
//require models
var db = require("../models")
var path = require("path");


//html routes...
module.exports = function (app) {

    //display home page on inital load
    app.get("/", function (req, res) {
        res.render("home")
    })

    //display searchpage on click of search button
    app.get("/search", function (req, res) {
        res.render("search")

    })

    //display add page on click of add button
    app.get("/add", function (req, res) {
       res.render("add");
    })

    //display specific restaurant data on click of that restuarant
    app.get("/restaurant", function (req, res) {

        // console.log(req.params.id)
        // var restaurantId = req.params.id
        var restaurantId= 1
        console.log(restaurantId)
        db.Restaurant.findAll({
            where: {
                id: restaurantId
            },
            include:[db.Deal]
        }).then(function(data){

            var restaurantObj= {
                restaurant:data

            }
            console.log(restaurantObj)
            console.log("restaurant data obj", restaurantObj.restaurant[0].dataValues)

            res.render("restaurant")
        })

    })
}