
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

    //display add page on click of add button
    app.get("/add", function (req, res) {
        db.Restaurant.findAll({
            include: [db.Deal]
        })
            .then(function (result) {
                var restObj = {
                    restaurants: result
                }
                res.render("add", restObj);
            });
    })


    //display specific restaurant data on click of that restuarant
    app.get("/restaurant/:id", function (req, res) {
        var restaurantId = req.params.id
        console.log("res id from var: " + restaurantId)
        db.Restaurant.findAll({
            where: {
                id: restaurantId
            },
            // include: [db.Deal, db.Comm, db.User]
            include: [db.Deal,
            {
                model: db.Comm,
                include: [db.User]
            }]

        }).then(function (data) {

            var restaurantObj = {
                restaurant: data

            }

            var dealArray = restaurantObj.restaurant[0].dataValues.Deals
            //set has deal to display all deals in handlebars
            console.log("has deal val________________________________")
            for (var i = 0; i < dealArray.length; i++) {
                if (dealArray[i].day === "Monday") {
                    dealArray[i].hasDeal = true
                    console.log(dealArray[i].hasDeal)
                }
                else if (dealArray[i].day === "Tuesday") {
                    dealArray[i].hasDeal = true
                    console.log(dealArray[i].hasDeal)
                }
                else if (dealArray[i].day === "Wednesday") {
                    dealArray[i].hasDeal = true
                    console.log(dealArray[i].hasDeal)
                }

                else if (dealArray[i].day === "Thursday") {
                    dealArray[i].hasDeal = true
                    console.log(dealArray[i].hasDeal)
                }
                else if (dealArray[i].day === "Friday") {
                    dealArray[i].hasDeal = true
                    console.log(dealArray[i].hasDeal)
                }
                else if (dealArray[i].day === "Saturday") {
                    dealArray[i].hasDeal = true
                    console.log(dealArray[i].hasDeal)
                }
                else if (dealArray[i].day === "Sunday") {
                    dealArray[i].hasDeal = true
                    console.log(dealArray[i].hasDeal)
                }
                //this area not totally jiving yet
                // else  {
                //     dealArray[i].hasDeal = false
                //     console.log(dealArray[i].hasDeal)
                // }
            }

            // console.log(restaurantObj.restaurant[0].dataValues.Comms.User)
            console.log(restaurantObj.restaurant[0].dataValues.Comms[0])
            console.log("____________________________user?")
            console.log(restaurantObj.restaurant[0].dataValues.Comms[0].dataValues.User)
            console.log("____________________________user user?")
            console.log(restaurantObj.restaurant[0].dataValues.Comms[0].dataValues.User.dataValues)
            console.log("____________________________user user?")
            console.log(restaurantObj.restaurant[0].dataValues.Comms[0].dataValues.User.dataValues.user_name)

            res.render("restaurant", restaurantObj)

        })
    })
}