
//require models
var db = require("../models")

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

    //display specific restaurant data on click of that restuarant
    app.get("/resaurant/:id", function (req, res) {

        console.log(req.params.id)
        var restaurantId = req.params.id
        console.log(restaurantId)
        db.Restaurant.findAll({
            where: {
                id: restaurantId
            }
        }).then(function(data){
            var restaurantObj= {
                resaurant:data

            }
            res.render("restaurant", restaurantObj)
        })
    })
}