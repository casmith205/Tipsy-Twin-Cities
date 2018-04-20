// Handle the clicks of the "submit" button on the form 
// and the click of the restaurants that show up on submit
var moment = require("moment");

$(function() {
    // On the click of the submit button of the form... 
    $("#submitBtn").on("click", function(event) {
        // Grab info from the search...
        var dealType = $("#deal_type").val();
        var currentDay = moment().format('dddd');
        var startTime = $("#start_time").val();

        // Set the information that we want to send to the API....
        var searchInfo = {
            deal_type: dealType,
            day: currentDay,
            start_time: startTime
        };
        // Send the GET request to DEALS
        $.ajax("/api/deals/search", {
            type: "GET",
            data: searchInfo
        }).then(
            function() {
                console.log("Searched for the following: ", searchInfo);
                // Reload the page to get the updated list
                location.reload();
            }
        );

        // DO A SIMILAR THING ON THE CLICK OF THE RESTAURANT

    });

    $("#resInput").on("click", function(event) {
        // Grab info from the search...
        var restaurants_Id = $("#restaurantId").val();

        // Set the information that we want to send to the API....
        var restInfo = {
            restLocation: restLocation,
            restWeb: restWeb
        };
        $.ajax("/api/restaurants/search", {
            type: "GET",
            data: restaurantInfo
        }).then(
            function() {
                console.log("Searched for the following: ", restaurantInfo);
                // Reload the page to get the updated list
                location.reload();
            });
    });
    $("#userInput").on("click", function(event) {
        // Grab info from the search...
        var user_name = $("#userName").val();
        var first_name = $("#firstName").val();
        var last_name = $("#lastName").val();
        var email = $("#emails").val();
        var password = $("#passWord").val();


        // Set the information that we want to send to the API....
        var userInfo = {
            user_name: user_name,
            first_name: first_name,
            last_name: last_name,
            eamil: eamil,
            password: password
        };
        $.ajax("/api/user/search", {
            type: "GET",
            data: user
        }).then(
            function() {
                console.log("Searched for the following: ", user);
                // Reload the page to get the updated list
                location.reload();
            });
    });


});