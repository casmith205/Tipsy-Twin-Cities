//dependencies... require models
var db = require("../models")

//routes
module.exports = function (app) {
    //post comments
    app.post("/api/comments", function (req, res) {
        console.log("request body: ", req.body)
        db.Comm.create(req.body).then(function (commData) {
            res.json(commData)
        })

    })

    //see comments for one restaurant restaurant id 
    app.get("/api/comments/:id", function (req, res) {
        console.log("restaurant id: ", req.params.id)
        db.Comm.findAll({
            include: [db.Restaurant, db.User],
            where: {
                RestaurantId: 1
            }
        }).then(function (commData) {
            res.json(commData)
        })
    })

    //get all comments from one user
    app.get("/api/comments/:userId", function (req, res) {
        console.log("user id: ", req.params.userId)
        db.Comm.findAll({
            include: [db.User],
            where: {
                UserId: req.params.userId
            }
        }).then(function (commData) {
            res.json(commData)
        })
    })

}
