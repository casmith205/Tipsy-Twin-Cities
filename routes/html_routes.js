
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
    app.get("/restaurant", function (req, res) {
        //eventually /restaurant/id once we have logic for displaying results on search page
        //store restaurant id as data attribute for each restaurant that matches...
        //grab id on click of that restaurant to display details

        // console.log(req.params.id) = restaurantId
        // var restaurantId = req.params.id
        var restaurantId = 1
        console.log("restaurant id: " + restaurantId)
        db.Restaurant.findAll({
            where: {
                id: restaurantId
            },
            include: [db.Deal, db.Comm]
        }).then(function (data) {

            var restaurantObj = {
                restaurant: data

            }
            // Deals table info...

            // console.log("restaurant array ______________________________________")
            // console.log(restaurantObj.restaurant[0])

            // console.log("Deals index 0 ?!?!?!?! ______________________________________")
            // console.log(restaurantObj.restaurant[0].dataValues.Deals[0])

            var dealArray = restaurantObj.restaurant[0].dataValues.Deals
            // console.log("Deals index 0 ?!?!?!?! ______________________________________")
            // console.log(dealArray[0])
            // console.log("deal day: " + dealArray[0].day)
            // console.log("deal desc: " + dealArray[0].deal_description)
            // console.log("deal start: " + dealArray[0].start_time)
            // console.log("deal end: " + dealArray[0].end_time)
            // console.log("deal type: " + dealArray[0].deal_type)
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

            // comment table info
            console.log("comment array_____________________________-____")
            //console.log(restaurantObj.restaurant[0].dataValues.Comms)
            console.log("user id from Comms[0]:" + restaurantObj.restaurant[0].dataValues.Comms[0].UserId)

            // var userId = restaurantObj.restaurant[0].dataValues.Comms[0].UserId

            // var commentArray = restaurantObj.restaurant[0].dataValues.Comms
            // var userNameArray = []
            // for (var i = 0; i < commentArray.length; i++) {
            //     var userId = restaurantObj.restaurant[0].dataValues.Comms[i].UserId
            //     console.log(userId)
            //     db.User.findAll({
            //         where: {
            //             id: userId
            //         }
            //     }).then(function (data) {
            //         var userObj = {
            //             user: data
            //         }
            //         // user table info
            //         // console.log("user object: ", userObj)
            //         // console.log("user array from user obj: " + userObj.user[0].dataValues)
            //         // console.log("user name: " + userObj.user[0].dataValues.user_name)
            //         var userName = userObj.user[0].dataValues.user_name
            //         console.log("userName" + userName)
            //         userNameArray.push(userName)
            //         console.log("un array: " + userNameArray)

            //         // var renderObj = {
            //         //     restaurantObj,
            //         //     userObj
            //         // }
            //     })

            // }
            res.render("restaurant", restaurantObj)

        })
    })
}